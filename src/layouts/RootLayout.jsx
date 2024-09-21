import { NavLink, Outlet } from "react-router-dom";

// components
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      {/* Navbar START */}
      <nav className="overflow-x-hidden border border-green-700  top-0 w-full z-50 bg-white shadow-lg">
        <Nabar />
      </nav>
      {/* Navbar END */}
      <main>
        <Outlet />
      </main>
      {/* Footer START */}
      <footer>
        <Footer />
      </footer>
      {/* Footer End */}
    </>
  );
}

export default RootLayout;
