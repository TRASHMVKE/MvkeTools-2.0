export default function Card({ page }) {
  return (
    <div className=" max-w-xs mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <div className="hover:scale-105 transition ">
        <a href={page.pageLink} target="_blank" rel="noopener noreferrer">
          <img
            src={page.imageLink}
            className="rounded-lg object-cover w-full h-60"
          />
        </a>
      </div>
      <div className="flex justify-between p-5">
        <span className="text-2xl">{page.title}</span>
        <span>{page.category}</span>
      </div>
      <div className="p-3">{page.description}</div>

      <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all" />
    </div>
  );
}
