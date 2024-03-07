import React, { useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import Gift from "../assets/gift.png";
import { CiSearch } from "react-icons/ci";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const imgs = [img1, img2, img3];

const itemList = [
  {
    id: 1,
    title: "Credit Card Reward Points Redemption",
  },

  {
    id: 3,
    title: "Credit Card Protection Plan Activation ",
  },
  {
    id: 4,
    title: "Card Protection Plan Cancellation",
  },
  {
    id: 5,
    title: "Card Activation",
  },
  {
    id: 6,
    title: "Card Block ",
  },
  {
    id: 7,
    title: "Card Limit Increase",
  },
  {
    id: 8,
    title: "Card Status",
  },
  {
    id: 9,
    title: "Instant Loan Approval",
  },
  {
    id: 10,
    title: "Card to Card Credit Card Apply",
  },
];

const Home = () => {
  const [step, setStep] = useState(0);
  return (
    <main className="max-w-6xl m-auto px-4 pt-6">
      <div className="flex md:flex-row flex-col justify-between items-center gap-10">
        <div className="flex  flex-col gap-3 border">
          <img src={imgs[step]} alt="img" />
          <div className="flex justify-between items-center">
            {["Credit Card", "Fixed Deposit", "Bill Pay"].map((el, index) => (
              <div
                key={index}
                className={`flex cursor-pointer justify-between items-center p-2 ${
                  step === index
                    ? "border-b border-primary text-primary"
                    : "underlline"
                }`}
                onClick={() => setStep(index)}
              >
                {el}
              </div>
            ))}
          </div>
        </div>

        <img width={400} height={100} src={img4} alt="" />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-5">
        <div className="bg-primary text-white p-2 rounded-md flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CiSearch size={24} />
            <input
              className="bg-transparent "
              type="text"
              name=""
              placeholder="Talk to us"
              id=""
            />
          </div>
          <img src={Gift} alt="gift" width={40} height={40} />
        </div>
        <div className="bg-slate-200 text-black p-2 rounded-md flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CiSearch size={24} />
            <input
              className="bg-transparent "
              type="text"
              name=""
              placeholder="Talk to us"
              id=""
            />
          </div>
          <img src={Gift} alt="gift" width={40} height={40} />
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-5">
          {itemList.map((el) => (
            <div
              key={el.id}
              className="bg-gray-100 border rounded-md p text-black p-5  flex md:flex-row gap-3  flex-col justify-between items-center"
            >
              <p>{el.title}</p>
              <Button>
                <Link to="/rewards/credit-card">Apply Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
