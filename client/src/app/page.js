import Feed from "@/Components/Feed";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Nav />
      <h1 className="mt-5 text-5xl uppercase font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        THE Community
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r uppercase from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
          {" "}
          Showcase
        </span>
      </h1>
     
      <div className="mt-8 px-8">
        <Feed />
      </div>
    </section>
  );
}
