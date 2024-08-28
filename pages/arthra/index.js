import Link from "next/link";
import ArticleImage from "../../components/ArticleImage";
import BaseLayout from "../../components/BaseLayout";
import H from "../../components/H";
import TextSection from "../../components/TextSection";
import links from "../../config/links";
import blog from "../../utils/blog";

export default function Index({ articles }) {
  return (
    <BaseLayout>
      <TextSection>
        <H size={2}>Άρθρα</H>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Article key={article.title} {...article} />
          ))}
        </div>
      </TextSection>
    </BaseLayout>
  );
}

function Article({ title, slug, description, image }) {
  let multipleSizes, multipleSizesWebp;

  multipleSizes = require.context(
    "../../articles/images?resize",
    false
  )(`./${image}`);

  multipleSizesWebp = require.context(
    "../../articles/images?resize&format=webp",
    false
  )(`./${image}`);

  return (
    <div className="flex flex-col items-start border border-solid rounded-lg hover:shadow-md border-slate-200">
      <ArticleImage
        image={{
          name: title,
          multipleSizes,
          multipleSizesWebp,
        }}
        className="w-full p-0 m-0 rounded-t-lg aspect-video"
      />
      <div className="p-4">
        <Link href={`${links.Arthra}/${slug}`} passHref title={title}>
          {title}
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles = blog.getAllArticles([
    "slug",
    "title",
    "date",
    "image",
    "description",
  ]);

  return {
    props: {
      articles,
    },
  };
};
