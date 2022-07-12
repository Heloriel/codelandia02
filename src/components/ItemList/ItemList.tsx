import { Item } from "../Item/Item";

export const ItemList = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 min-h-[400px] w-full">
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"01"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"02"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"03"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"04"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"05"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"06"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"07"} />
        </a>
      </li>
      <li className="w-full h-full group">
        <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
          <Item id={"08"} />
        </a>
      </li>
    </ul>
  );
};
