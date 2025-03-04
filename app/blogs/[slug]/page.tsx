import { mockedBlogs } from "@/app/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage(props: Props) {
  const { slug } = await props.params;
  const blog = mockedBlogs.find((b) => b.slug === slug);

  if (!blog) return <main>404</main>;

  return (
    <main>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </main>
  );
}
