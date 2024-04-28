import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

interface IProps {
  phoneNumber: string;
  otpLength: number;
  onOtpSubmit: () => void;
}

const OtpScreen = ({ phoneNumber, otpLength, onOtpSubmit }: IProps) => {
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(+value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    const combinedOtp = otp.join("");

    if (otp.length === otpLength) console.log("Submitted otp:", combinedOtp);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // if key is backspace and there is nothing in otp field
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
    if (index < otpLength - 1 && !otp[index + 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  return (
    <div className="flex flex-col">
      <p>Verify your phone number: {phoneNumber}</p>
      <h1>Enter OTP:</h1>
      <div className="flex">
        {otp.map((o, index) => {
          return (
            <input
              style={{ border: "1px solid black" }}
              className="w-10 h-10 rounded-xl ml-6 text-center"
              key={`otp-${index}`}
              type="text"
              // @ts-ignore
              ref={(input) => (inputRefs.current[index] = input)}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOtpChange(e, index)
              }
              value={o}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={() => handleOtpClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpScreen;
