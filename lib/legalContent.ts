import fs from "fs";
import path from "path";

export interface LegalDocContent {
  terms: string;
  privacy: string;
}

export function getLegalDocContent(): LegalDocContent {
  const dir = path.join(process.cwd(), "public", "legal");
  return {
    terms: fs.readFileSync(path.join(dir, "Terms_of_Service.md"), "utf8"),
    privacy: fs.readFileSync(path.join(dir, "Privacy_Policy.md"), "utf8"),
  };
}