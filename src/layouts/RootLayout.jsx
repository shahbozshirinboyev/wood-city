import { NavLink, Outlet } from "react-router-dom";

// components
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      {/* Navbar START */}
      <nav className="overflow-x-hidden">
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
