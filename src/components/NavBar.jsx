import { Link } from "react-router-dom";
import Button from "./ui/Button";
import Logo from "../assets/logo-white.png";

const NavBar = () => {
  return (
    <>
      <nav className="bg-primary  ">
        <div className="max-w-6xl m-auto">
          <div className="py-4">
            <Link to={"/"}>
              <img src={Logo} alt="main-logo" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="shadow-md ">
        <div className="flex justify-end lg:justify-between max-w-6xl m-auto py-6 px-4">
          <div className="lg:block hidden ">
            <div className="flex  justify-between items-center gap-20">
              <Link to={"/rewards/credit-card"}>Explore Products</Link>
              <Link to={"/rewards/credit-card"}>Grab Deals</Link>
              <Link to={"/rewards/credit-card"}>Make Payments</Link>
              <Link to={"/rewards/credit-card"}>Bank Smart</Link>
              <Link to={"/rewards/credit-card"}>Apply Now</Link>
            </div>
          </div>
          <Button>
            <Link to={"/rewards/credit-card"}>Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
