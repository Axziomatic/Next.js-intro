import Link from "next/link";

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
        Läs mer här
      </Link>
    </main>
  );
}
