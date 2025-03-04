interface Blog {
  title: string;
  id: string;
  slug: string;
  image: string;
  summary: string;
  content: string;
  author: string;
}

export const mockedBlogs: Blog[] = [
  {
    id: "1",
    title: "Introduktion till Next.js",
    slug: "introduktion-till-nextjs",
    summary: "lorem lorem lorem",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi aliquid. Deserunt, cum! Obcaecati, hic ipsa porro consequuntur, minima, ut provident et praesentium laborum sapiente rerum in ducimus error reiciendis? ",
    author: "Miri",
  },
  {
    id: "2",
    title: "Routing i Next.js",
    slug: "routing-till-nextjs",
    summary: "Bimbims Bloginlägg",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi aliquid. Deserunt, cum! Obcaecati, hic ipsa porro consequuntur, minima, ut provident et praesentium laborum sapiente rerum in ducimus error reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi aliquid. Deserunt, cum! Obcaecati, hic ipsa porro consequuntur, minima, ut provident et praesentium laborum sapiente rerum in ducimus error reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi aliquid. Deserunt, cum! Obcaecati, hic ipsa porro consequuntur, minima, ut provident et praesentium laborum sapiente rerum in ducimus error reiciendis? ",
    author: "Bimbim",
  },
];
