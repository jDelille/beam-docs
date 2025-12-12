import LeftSidebar from "../components/sidebar/LeftSidebar";
import RightSidebar from "../components/sidebar/RightSidebar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function Layout() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <aside>
          <LeftSidebar />
        </aside>
        <main>
          {/* <div className="notice">
            <div className="label">Important</div>
            <p>This CLI is still in its beta phase </p>
          </div> */}
          <Outlet />
        </main>
        <aside>
          <RightSidebar />
        </aside>
      </div>
       <Footer />
    </div>
  );
}
