import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import SideBar from "./components/SideBar";

const App = () => {
  useGetCurrentUser();

  return window.location.pathname === "/login" ? (
    <Outlet />
  ) : (
    <>
      <Header />
      <main className="main w-full h-[90vh] bg-zinc-900 text-white flex">
        <SideBar />
        <section className="videos w-[100%] h-full overflow-y-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default App;
