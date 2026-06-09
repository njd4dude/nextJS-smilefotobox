import fs from "fs";
import path from "path";

const PHOTOSTRIP_DIR = path.join(process.cwd(), "public/images/photostrip");
const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;

export function getPhotostripImages() {
  if (!fs.existsSync(PHOTOSTRIP_DIR)) return [];

  return fs
    .readdirSync(PHOTOSTRIP_DIR)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/images/photostrip/${encodeURIComponent(file)}`);
}
