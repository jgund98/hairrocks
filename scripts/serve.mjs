// Tiny static server for the production build in out/
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";

const ROOT = join(import.meta.dirname, "..", "out");
const PORT = 3990;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
};

createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.endsWith("/")) path += "index.html";
    let file = normalize(join(ROOT, path));
    if (!file.startsWith(ROOT)) throw new Error("traversal");
    try {
      const s = await stat(file);
      if (s.isDirectory()) file = join(file, "index.html");
    } catch {
      if (!extname(file)) file = `${file}.html`;
    }
    const data = await readFile(file);
    const ext = extname(file);
    res.writeHead(200, {
      "content-type": MIME[ext] ?? "application/octet-stream",
      "cache-control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
    });
    res.end(data);
  } catch {
    try {
      const nf = await readFile(join(ROOT, "404.html"));
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      res.end(nf);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  }
}).listen(PORT, () => console.log(`hair-rocks production build → http://localhost:${PORT}`));
