import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function RootLayout() {

  const [loading, setLoading] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      {/* Navbar START top-1 md:top-2 */}
      <nav className={`sticky ${ isScrolled ? "top-0" : "top-0" } z-[999] transition duration-300`}>
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
