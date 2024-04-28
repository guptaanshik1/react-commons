import { ChangeEvent, useState } from "react";
import { PhoneOtpSteps } from "../../utils/data";
import OtpScreen from "./OtpScreen";
import { phoneNumberRegex } from "../../utils/regex";

const PhoneNumber = () => {
  const [step, setStep] = useState<PhoneOtpSteps>(
    PhoneOtpSteps.ENTER_PHONE_NUMBER
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const validatePhoneNumber = () => {
    if (phoneNumber?.length !== 10 || phoneNumberRegex.test(phoneNumber))
      return true;
    else return false;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(+value)) return;
    setPhoneNumber(value);
  };

  const handlePhoneSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validatePhoneNumber()) {
      alert("Invalid phone number");
      return;
    }
    console.log("Phone number sent to api");
    setStep(PhoneOtpSteps.ENTER_OTP);
  };

  const handleGoBack = () => {
    setStep(PhoneOtpSteps.ENTER_PHONE_NUMBER);
  };

  const handleGoAhead = () => {
    setStep(PhoneOtpSteps.ENTER_OTP);
  };

  const onOtpSubmit = () => {
    console.log(`Phone Verification has been successful`);
  };

  return (
    <div className="flex flex-col mb-20">
      <h1>Login With Your Phone Number</h1>
      <div className="flex justify-between align-middle">
        <button
          className="bg-none cursor-pointer"
          onClick={handleGoBack}
          disabled={step === PhoneOtpSteps.ENTER_PHONE_NUMBER}
        >
          Go Back
        </button>
        <button
          onClick={handleGoAhead}
          className="bg-none cursor-pointer"
          disabled={validatePhoneNumber() || step === PhoneOtpSteps.ENTER_OTP}
        >
          Go Ahead
        </button>
      </div>
      <div className="flex flex-col">
        {step === PhoneOtpSteps.ENTER_PHONE_NUMBER ? (
          <form onSubmit={handlePhoneSubmit}>
            <h3>Enter Your Phone Number</h3>
            <div className="flex">
              <input
                type="text"
                value={phoneNumber}
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        ) : (
          <OtpScreen
            phoneNumber={phoneNumber}
            otpLength={4}
            onOtpSubmit={onOtpSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default PhoneNumber;
