import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {window.location.pathname === "/login" && <Outlet />}
      
      <Header />
      <main className="main w-full h-[90vh] bg-zinc-900 text-white flex">
        <aside className="sidebar w-[15%] h-full"></aside>
        <section className="videos-container w-[85%] h-full bg-red-400 overflow-y-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default App;
