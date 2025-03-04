import Link from "next/link";
import { mockedBlogs } from "./lib/blog";

export default function Home() {
  return (
    <main className="p-4">
      <h2 className="text-3xl mb-2">Rubrik</h2>
      <p className="mb-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam
        corrupti quod modi atque animi vero, ex obcaecati distinctio, minima et
        reprehenderit iure cum quam consequuntur totam quas impedit? Nam.
      </p>
      <Link href="/about" className="text-slate-300">
        Läs mer om svenska helgdagar här
      </Link>

      <h2 className="text-2xl mb-2 mt-8">Rubrik</h2>
      {mockedBlogs.map((blog) => (
        <Link href={"/blogs/" + blog.slug} key={blog.id}>
          <article className="border p-2 my-4">
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <p>{blog.author}</p>
          </article>
        </Link>
      ))}
    </main>
  );
}
