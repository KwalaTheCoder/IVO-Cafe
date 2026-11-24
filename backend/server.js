const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
const DATA_FILE = path.join(__dirname, 'data', 'menu.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function readMenu() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeMenu(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '/').split('?')[0];

  if (urlPath === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ status: 'ok', service: 'ivo-cafe-backend' }));
  }

  if (urlPath === '/api/menu' && req.method === 'GET') {
    try {
      const data = readMenu();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: 'Failed to load menu data' }));
    }
  }

  if (urlPath === '/api/menu' && req.method === 'PUT') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const current = readMenu();
        const updated = {
          ...current,
          brand: parsed.brand || current.brand,
          about: typeof parsed.about === 'string' ? parsed.about : current.about,
          contact: parsed.contact ? { ...current.contact, ...parsed.contact } : current.contact,
          categories: Array.isArray(parsed.categories) ? parsed.categories : current.categories
        };
        writeMenu(updated);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ ok: true, data: updated }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  const safeRel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const fullPath = path.normalize(path.join(FRONTEND_DIR, safeRel));
  if (!fullPath.startsWith(FRONTEND_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not Found');
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`IVO CAFÉ server running at http://localhost:${PORT}`);
});
