import { useMemo } from "react";
import { IUserAnswer } from "../../utils/data";

interface IProps {
  userAnswers: IUserAnswer[];
  onReset: () => void;
}

const QuizResult = ({ userAnswers, onReset }: IProps) => {
  const numberOfCorrectAnswers = useMemo(
    () => userAnswers?.filter((answer) => answer?.isCorrectAnswerGiven)?.length,
    []
  );

  return (
    <div className="flex flex-col">
      <div className="flex align-middle justify-center gap-8">
        <h1>You answered {numberOfCorrectAnswers} (s) correctly </h1>
        <h3 className="text-red-500 cursor-pointer" onClick={onReset}>
          Reset your quiz and try again
        </h3>
      </div>
      <h1 className="font-bold">Summary</h1>
      <div className="flex flex-col align-middle justify-center px-[25%] gap-4">
        {userAnswers?.map((userAnswer) => {
          return (
            <div key={userAnswer?.question}>
              <div
                className={`flex gap-8 ${
                  userAnswer?.isCorrectAnswerGiven
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <p>{userAnswer?.question}</p>
                <span>-</span>
                <p>{userAnswer?.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizResult;
