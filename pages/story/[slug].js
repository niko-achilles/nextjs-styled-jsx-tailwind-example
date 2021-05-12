import { getFiles, getFileBySlug } from "../../lib/mdx";
import StoryLayout from "../../layouts/StoryLayout";

import { MDXRemote } from "next-mdx-remote";

export default function StoryPage({ mdxSource, frontMatter }) {
  return (
    <StoryLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </StoryLayout>
  );
}

export async function getStaticPaths() {
  const stories = await getFiles("stories");

  return {
    paths: stories.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const story = await getFileBySlug("stories", params.slug);

  return { props: { ...story } };
}
