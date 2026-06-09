import fs from "fs";
import path from "path";

const BACKDROPS_DIR = path.join(process.cwd(), "public/images/backdrops");
const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;

export function getBackdropImages() {
  if (!fs.existsSync(BACKDROPS_DIR)) return [];

  return fs
    .readdirSync(BACKDROPS_DIR)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/images/backdrops/${encodeURIComponent(file)}`);
}
