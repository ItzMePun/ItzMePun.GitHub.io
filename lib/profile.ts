import fs from "node:fs/promises";
import path from "node:path";

export default async function MyProfile() {
    const aboutPath = path.join(process.cwd(), "content", "personal","about.md");

    return {
        about: await fs.readFile(aboutPath, "utf8"),
        resume: "/profile/Pun_Phanasomburna_Resume.pdf"
    };
}