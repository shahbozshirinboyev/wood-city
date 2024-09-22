import { NavLink, Outlet } from "react-router-dom";
import bgMin from '../../public/images/bg.jpg'

// components
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (

    <div className="border-[5px] border-red-700" >

      {/* Navbar START */}
      <nav className="border-[5px] border-green-800">
        <Nabar />
      </nav>
      {/* Navbar END */}
      <main className="">
        <Outlet />
      </main>
      {/* Footer START */}
      <footer className="">
        <Footer />
      </footer>
      {/* Footer End */}

    </div>
  );
}

export default RootLayout;
