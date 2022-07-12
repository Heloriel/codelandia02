import { Item } from "../Item/Item";

export const ItemList = () => {
  return (
    <ul className="flex flex-wrap justify-between gap-y-9">
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"01"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"02"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"03"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"04"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"05"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"06"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"07"} />
        </a>
      </li>
      <li className="w-full min-w-[300px] md:max-w-[300px] h-[300px] my-y">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"08"} />
        </a>
      </li>
    </ul>
  );
};
