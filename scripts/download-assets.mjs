import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const assets = [
  // Logo & site-wide
  { url: "https://www.rebath.com/uploads/site/logo.svg", dest: "images/logo.svg" },
  { url: "https://www.rebath.com/uploads/site/map.svg", dest: "images/map.svg" },

  // Review platform logos
  { url: "https://www.rebath.com/uploads/2024/03/logo-google.svg", dest: "images/logo-google.svg" },
  { url: "https://www.rebath.com/uploads/2024/03/logo-facebook.svg", dest: "images/logo-facebook.svg" },
  { url: "https://www.rebath.com/uploads/2024/03/logo-homeadvisor.svg", dest: "images/logo-homeadvisor.svg" },
  { url: "https://www.rebath.com/uploads/2024/03/logo-houzz.svg", dest: "images/logo-houzz.svg" },

  // Hero images
  { url: "https://www.rebath.com/uploads/2025/06/231004-ReBath-2545-scaled-e1750427386507-1400x826.jpg", dest: "images/hero-home.jpg" },
  { url: "https://www.rebath.com/uploads/2024/03/hero-process-1400x583.jpg", dest: "images/hero-process.jpg" },
  { url: "https://www.rebath.com/uploads/2024/02/hero-about-us-1400x583.jpg", dest: "images/hero-about.jpg" },
  { url: "https://www.rebath.com/uploads/2024/02/hero-blog-1400x583.jpg", dest: "images/hero-blog.jpg" },
];

async function download(url, dest) {
  const fullPath = path.join(publicDir, dest);
  mkdirSync(path.dirname(fullPath), { recursive: true });

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(fullPath));
  console.log(`✓ ${dest}`);
}

const results = await Promise.allSettled(
  assets.map(({ url, dest }) =>
    download(url, dest).catch((e) => {
      console.error(`✗ ${dest}: ${e.message}`);
      throw e;
    })
  )
);

const failed = results.filter((r) => r.status === "rejected");
console.log(`\nDone: ${results.length - failed.length}/${results.length} downloaded`);
