import Link from "next/link";
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
        {articles.map((article) => (
          <Article key={article.title} {...article} />
        ))}
      </TextSection>
    </BaseLayout>
  );
}

function Article({ title, slug, description, image }) {
  return (
    <div>
      {/* <ArticleImage name={image} className="inline-block w-48" /> */}
      <Link href={`${links.Arthra}/${slug}`}>{title}</Link>
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
