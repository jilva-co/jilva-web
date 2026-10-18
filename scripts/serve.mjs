import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { gzip } from "node:zlib";
import { promisify } from "node:util";

const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};
const compressible = new Set([".html", ".css", ".js", ".json", ".txt", ".svg"]);
const gzipCache = new Map();
const compress = promisify(gzip);

try {
  await stat(path.join(root, "index.html"));
} catch {
  console.error("No static build found. Run npm run build first.");
  process.exit(1);
}

createServer(async (request, response) => {
  try {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const relative = path.relative(root, path.resolve(root, `.${pathname}`));
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      response.writeHead(403).end();
      return;
    }
    let file = path.join(root, relative);
    if ((await stat(file).catch(() => null))?.isDirectory())
      file = path.join(file, "index.html");

    let status = 200;
    let body;
    let fileInfo;
    const headers = {};
    try {
      [body, fileInfo] = await Promise.all([readFile(file), stat(file)]);
    } catch {
      file = path.join(root, "404.html");
      [body, fileInfo] = await Promise.all([readFile(file), stat(file)]);
      status = 404;
    }
    headers["Content-Type"] =
      types[path.extname(file)] || "application/octet-stream";

    // Hashed build assets are immutable; pages revalidate on each visit.
    headers["Cache-Control"] =
      status === 200 && pathname.startsWith("/_next/static/")
        ? "public, max-age=31536000, immutable"
        : "no-cache";

    const canCompress = compressible.has(path.extname(file));
    if (canCompress) headers["Vary"] = "Accept-Encoding";
    const acceptsGzip = String(request.headers["accept-encoding"] || "")
      .split(",")
      .some((part) => {
        const [encoding, ...parameters] = part.trim().toLowerCase().split(";");
        const quality = parameters.find((parameter) =>
          parameter.trim().startsWith("q="),
        );
        return (
          encoding === "gzip" &&
          (!quality || Number(quality.trim().slice(2)) > 0)
        );
      });
    if (body.length > 512 && canCompress && acceptsGzip) {
      // Equal-length pages can change their hashed CSS/JS URLs between builds.
      const key = `${file}:${fileInfo.mtimeMs}:${body.length}`;
      let compressed = gzipCache.get(key);
      if (!compressed) {
        compressed = await compress(body);
        if (gzipCache.size > 300) gzipCache.clear();
        gzipCache.set(key, compressed);
      }
      headers["Content-Encoding"] = "gzip";
      body = compressed;
    }

    headers["Content-Length"] = body.length;
    response.writeHead(status, headers);
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(400).end("Bad request");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Jilva production preview: http://127.0.0.1:${port}`);
});
