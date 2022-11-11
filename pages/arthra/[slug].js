import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ArticleImage from "../../components/ArticleImage";
import BaseLayout from "../../components/BaseLayout";
import MDXComponents from "../../components/MDXComponents";
import TextSection from "../../components/TextSection";
import utils from "../../utils/blog";

const Article = ({ source, frontMatter }) => {
  const router = useRouter();
  const { slug } = router.query;
  let multipleSizes, multipleSizesWebp, ogimage;

  if (frontMatter.image) {
    multipleSizes = require.context(
      "../../articles/images?resize",
      false
    )(`./${frontMatter.image}`);

    multipleSizesWebp = require.context(
      "../../articles/images?resize&format=webp",
      false
    )(`./${frontMatter.image}`);

    ogimage = multipleSizesWebp.images[multipleSizesWebp.images.length - 1];
  }

  return (
    <BaseLayout title={frontMatter.title}>
      {ogimage && (
        <NextSeo
          openGraph={{
            type: "article",
            url: `https://skepsileksi.gr${router.asPath}`,
            title: `${frontMatter.title} | Online Λογοθεραπεία • Σκέψη - Λέξη`,
            description:
              "Λογοθεραπεία εξ αποστάσεως μέσω skype σε παιδιά Ελλήνων εσωτερικού και εξωτερικού με αυτισμό, τραυλισμό, διαταραχές άρθρωσης, μαθησιακές δυσκολίες. Καθοδήγηση γονέων και εκπαιδευτικό υλικό. Ανεξάρτητα από το που μένεις, η βοήθεια είναι πάντα δίπλα σου!",
            images: [
              {
                url: `https://skepsileksi.gr${ogimage.path}`,
                width: ogimage.width,
                height: ogimage.height,
                alt: `${frontMatter.title} | Online Λογοθεραπεία • Σκέψη - Λέξη`,
                type: "image/webp",
              },
            ],
            locale: "el_GR",
          }}
        />
      )}
      <TextSection>
        <ArticleJsonLd
          url={`https://skepsileksi.gr/arthra/${slug}`}
          title={frontMatter.title}
          // images={[
          //   "https://example.com/photos/1x1/photo.jpg",
          //   "https://example.com/photos/4x3/photo.jpg",
          //   "https://example.com/photos/16x9/photo.jpg",
          // ]}
          datePublished={new Date(frontMatter.date).toISOString()}
          authorName="Αποστολάκη Μαρία"
          publisherName="Αποστολάκη Μαρία"
          // publisherLogo="https://www.example.com/photos/logo.jpg"
          description={frontMatter.description}
        />
        {frontMatter.image && (
          <ArticleImage
            image={{
              name: frontMatter.title,
              multipleSizes,
              multipleSizesWebp,
            }}
            source={frontMatter.imageSource}
          />
        )}
        <MDXRemote {...source} components={MDXComponents} />
      </TextSection>
    </BaseLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const { content, data } = utils.getRawArticleBySlug(params.slug);

  const source = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      frontMatter: data,
      source,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = utils
    .getAllSlugs()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
