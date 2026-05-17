// Usage: node screenshot.mjs <url> [label]
// Screenshots saved to ./temporary screenshots/screenshot-N[-label].png
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const helperScript = 'C:/Users/jacqu/AppData/Local/Temp/puppeteer-test/screenshot.cjs';
const args = [__dirname, url, label].map(a => JSON.stringify(a)).join(' ');
const result = execSync(`node ${helperScript} ${args}`, { encoding: 'utf8' });
console.log(result.trim());
