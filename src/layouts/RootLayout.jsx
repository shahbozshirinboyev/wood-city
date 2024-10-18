import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// react-hot-toast
import { Toaster } from "react-hot-toast";

// components
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import LeaveRequest from "../components/LeaveRequest";

function RootLayout() {

  const [loading, setLoading] = useState(true);
  const [loadOpacity, setLoadOpacity] = useState(true);
  
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

  useEffect(() => {
    // Simulate 2 seconds loading
    const loadingTimer = setTimeout(() => {
      setLoadOpacity(false); // Start fade-out effect
    }, 1000);

    // After 1 second of fade-out, remove loading spinner from DOM
    const opacityTimer = setTimeout(() => {
      setLoading(false); // Remove spinner after fade-out completes
    }, 2000); // 1 second fade-out duration

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(opacityTimer);
    };
  }, []);

  return (
    <>

      {loading && <Loading loadOpacity={loadOpacity} />}

      <Toaster />

      <LeaveRequest />

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
