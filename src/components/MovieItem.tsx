import Image from "next/image";

export interface MovieItemProps {
  id: string;
  type: string;
  cover: string;
  name: string;
  date: string;
  shortDescription: string;
}

export default function MovieItem({
  cover,
  name,
  date,
  shortDescription,
}: MovieItemProps) {
  return (
    <div className="container w-11/12 sm:w-3/4 sm:flex items-start gap-x-3 sm:gap-x-5 py-5 border-b-2">
      <Image
        className="float h-70 w-40"
        src={cover}
        width={200}
        height={200}
        alt={""}
      />
      <div className="flex flex-col">
        <h2 className="text-xl sm:text-2xl font-semibold">{name}</h2>
        <p>{date}</p>
        <p className="my-5">{shortDescription}</p>
      </div>
    </div>
  );
}
