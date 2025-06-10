import { readFileSync } from 'fs';
import { join } from 'path';

const SITE_PATH = join(process.cwd(), 'src/lib/data/site.json');

export async function load() {
  let resume = '/assets/resume.pdf'; // fallback
  try {
    const siteData = readFileSync(SITE_PATH, 'utf-8');
    resume = JSON.parse(siteData).resume || resume;
  } catch {}
  return { resume };
}