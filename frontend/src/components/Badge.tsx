interface BadgeProps {
  text: string;
  selected?: boolean; 
  onClick: () => void;
}
const Badge = ({ text, selected, onClick }: BadgeProps) => {
  return (
    <span
      onClick={onClick} // Attach onClick handler
      className={`${
        !selected ? "bg-black text-white hover:shadow-md hover:shadow-white " : "bg-gray-300 text-black"
      } border-[3px]  border-gray-300 text-sm font-semibold py-1 px-2 rounded-xl  transition flex justify-center items-center cursor-pointer `}
    >
      {text}
    </span>
  );
};

export default Badge;
