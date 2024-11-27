import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSidebarVisible } from "../store/reducers/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const sideBarToggleHandler = () => {
    dispatch(toggleSidebarVisible());
  };

  return (
    <header className="header w-full bg-zinc-900 text-white">
      <nav className="navbar w-full h-[10vh] flex justify-between items-center px-5">
        <div className="left flex items-center gap-6">
          <span
            className="text-2xl cursor-pointer"
            onClick={sideBarToggleHandler}
          >
            <FiMenu />
          </span>

          <div className="image">
            <img src="../../assets/logo.png" alt="Logo" className="w-28" />
          </div>
        </div>

        <div className="center">
          <div className="search-bar flex items-center border border-zinc-700 rounded-full overflow-hidden">
            <input
              placeholder="Search"
              type="search"
              className="w-[500px] bg-transparent outline-none text-white px-5"
            />

            <div className="text-2xl bg-zinc-700 h-full py-2 px-5 cursor-pointer">
              <BiSearch />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="avatar w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="https://imgs.search.brave.com/9lEhL1vTnoiJt1H8A_e-WI1QXcKV1iw4W_YLF65ZdC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvM2Qt/cmVuZGVyLWF2YXRh/ci1jaGFyYWN0ZXJf/MjMtMjE1MDYxMTc2/NS5qcGc_c2VtdD1h/aXNfaHlicmlk"
              alt="Profile avatar"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
