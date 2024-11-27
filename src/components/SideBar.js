import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isSidebarVisible = useSelector((store) => store.app.isSidebarVisible);

  return (
    <>
      <aside
        className={`sidebar h-full p-2 ${
          isSidebarVisible ? "w-52" : "w-16"
        } overflow-hidden duration-300`}
      >
        <div className="links-group flex flex-col gap-2">
          <Link
            className={`py-2 pl-3 w-full flex items-center bg-zinc-700 rounded-lg gap-3 font-semibold
            ${!isSidebarVisible && "justify-center pl-0"}`}
            to={"/"}
          >
            <span className="text-2xl">
              <IoMdHome />
            </span>
            {isSidebarVisible && "Home"}
          </Link>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
