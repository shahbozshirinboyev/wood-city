import { NavLink, Outlet } from "react-router-dom";

// components
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      {/* Navbar START */}
      <nav className="container border border-red-800">
        <Nabar />
      </nav>
      {/* Navbar END */}
      <main className="container">
        <Outlet />
      </main>
      {/* Footer START */}
      <footer className="container">
        <Footer />
      </footer>
      {/* Footer End */}
    </>
  );
}

export default RootLayout;
