import Image from "next/image";
import datas from "../data/datas";

const Feed = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
    {datas.map((data) => (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card" key={data.id}>
          <Image
            height={40}
            width={40}
            className="w-full h-auto object-cover rounded-xl"
            src={data.url}
            alt={data.title}
          />
          <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
            <h1 className="text-white text-sm overflow-y-auto prompt">
              {data.title}
            </h1>
            <div className="mt-5 flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
                  {data.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="text-white text-sm">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Feed;
