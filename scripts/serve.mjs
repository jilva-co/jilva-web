import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

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
    let content;
    try {
      content = await readFile(file);
      response.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
    } catch {
      content = await readFile(path.join(root, "404.html"));
      response.writeHead(404, { "Content-Type": types[".html"] });
    }
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(400).end("Bad request");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Jilva production preview: http://127.0.0.1:${port}`);
});
