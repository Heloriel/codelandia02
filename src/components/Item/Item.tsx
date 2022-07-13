interface IItemProps {
  id: string;
}

export const Item = (props: IItemProps) => {
  return <img src={`/public/assets/images/items/${props.id}.png`} className="w-auto h-auto object-contain group-hover:scale-110 transition-transform" />;
};
