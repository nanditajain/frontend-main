import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-bg">
      <div className="max-w-6xl m-auto flex flex-col gap-10">
        <div>
          <h2 className="text-center text-primary">
            Credit Card Online Application
          </h2>
        </div>
        <div className="md:bg-transparent bg-white px-4 flex flex-col md:items-start md:justify-start justify-center items-center">
          <div>
            <h1 className="mt-8  text-2xl font-semibold">
              Experience a world of rewards & offers!
            </h1>
            <h1 className="mt-8 text-primary text-2xl font-semibold">
              We,ll need a bit of information to get you started
            </h1>
          </div>
          <div className="bg-primary relative mt-10 w-fit px-8 py-4 rounded-lg  flex flex-col gap-4">
            <img
              className="bg-white border-2 border-primary -top-8 left-56 absolute rounded-full p-2 "
              src="https://web.axisbank.co.in/DigitalChannel/WebForm/assets/images/welcome.png"
              alt=""
            />
            <h1 className="mt-8 text-white text-2xl font-semibold">
              Are you an existing Axis Bank customer?
            </h1>
            <div className="flex justify-around items-center">
              <Link to={"/explore"}>
                <button className="bg-white text-primary px-8 py-2">Yes</button>
              </Link>
              <Link to={"/explore"}>
                <button className="bg-white text-primary px-8 py-2">No</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
