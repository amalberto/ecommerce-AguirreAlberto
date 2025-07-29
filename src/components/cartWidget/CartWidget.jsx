import { FaShoppingCart } from "react-icons/fa";

export function CartWidget() {
  return (
    <div className="relative flex items-center cursor-pointer">
      <FaShoppingCart size={24} className="text-white" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
        3
      </span>
    </div>
  );
}
