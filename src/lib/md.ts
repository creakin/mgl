import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const materialsDirectory = path.join(process.cwd(), "content/materials");

export type Material = {
  id: string;
  title: string;
  author: string;
  tags: string[];
  summary?: string;
  date: string;
  link: string;
  image?: string;
  content: string;
};

export async function getAllMaterials() {
  const fileNames = await fs.promises.readdir(materialsDirectory);

  return Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(materialsDirectory, fileName);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        id,
        content,
        ...data,
      } as Material;
    }),
  );
}

export async function getMaterialData(id: string) {
  const fullPath = path.join(materialsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    ...matterResult.data,
    content: contentHtml,
  } as Material;
}
