import Feed from "@/Components/Feed";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Nav />
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl text-center">
        Promptopia is an open-source AI prompting Image sharing tool for modern
        world to discover, create and share creative images
      </p>

      <div className="mt-8 px-8">
        <Feed />
      </div>
    </section>
  );
}
