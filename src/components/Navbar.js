import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = ({ categories, activeCat, changeCat, onClickLogo }) => {
  return (
    <>
      <nav className="py-4 flex flex-row justify-between items-center ">
        <h1
          className="w-[159px] h-[43px] text-[20px] lg:text-[34px] font-normal grow text-[#e5dfd9] ms-6 cursor-pointer"
          onClick={onClickLogo}
        >
          TANN TRIM
        </h1>
        <ul className="flex flex-row justify-between items-center mr-10">
          <li className="mx-4 text-[#e5dfd9] text-base font-[400] cursor-pointer">
            <IoIosSearch size={30} />
          </li>
          <li className="mx-4 text-[#e5dfd9] text-base font-[400] cursor-pointer">
            <FaRegUser size={25} />
          </li>
          <li className="mx-4 text-[#e5dfd9] text-base font-[400] cursor-pointer">
            <FaRegBookmark size={25} />
          </li>
          <li className="mx-4 text-[#e5dfd9] text-base font-[400] cursor-pointer">
            <FaShoppingBag size={25} />
          </li>
        </ul>
      </nav>
      <ul className="flex flex-row justify-between items-center overflow-auto">
        {categories.map((cat) => (
          <li
            className={`m-2 cursor-pointer w-full ${
              activeCat === cat ? "text-yellow-400" : ""
            }`}
            key={cat}
            onClick={() => {
              changeCat(cat);
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
