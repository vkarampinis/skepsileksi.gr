import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";
const articlesDirectory = join(process.cwd(), "articles");

function getRawArticleBySlug(slug) {
  const fullPath = join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

function getAllSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((f) => path.extname(f).toLowerCase() === ".mdx");
}

function getArticleBySlug(slug, fields) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const { data, content } = getRawArticleBySlug(realSlug);
  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

function getAllArticles(fields) {
  return getAllSlugs()
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
}

function getArticlesByTag(tag, fields) {
  return getAllArticles(fields).filter((article) => {
    const tags = article.tags ?? [];
    return tags.includes(tag);
  });
}

function getAllTags() {
  const articles = getAllArticles(["tags"]);
  const allTags = new Set();
  articles.forEach((article) => {
    const tags = article.tags;
    tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRawArticleBySlug,
  getAllSlugs,
  getAllArticles,
  getArticlesByTag,
  getArticleBySlug,
  getAllTags,
};
