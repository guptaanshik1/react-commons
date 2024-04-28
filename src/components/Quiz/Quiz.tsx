import { useState } from "react";
import quizData from "./quizData.json";
import Question from "./Question";
import { IUserAnswer } from "../../utils/data";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<IUserAnswer>>([]);

  const onAnswerSelect = (
    isCorrect: boolean,
    answerOption: string,
    question: string
  ) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswers((prev) => {
      const newUserAnswer: IUserAnswer = {
        question,
        answer: answerOption,
        isCorrectAnswerGiven: isCorrect,
      };

      return [...prev, newUserAnswer];
    });
  };

  const onReset = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  return (
    <div className="flex flex-col justify-center align-middle my-10">
      <h1 className="font-bold text-2xl">Quiz</h1>
      {currentQuestionIndex !== quizData?.length && (
        <Question
          questionData={quizData[currentQuestionIndex]}
          onAnswerSelect={onAnswerSelect}
        />
      )}

      {currentQuestionIndex === quizData?.length && (
        <QuizResult userAnswers={userAnswers} onReset={onReset} />
      )}
    </div>
  );
};

export default Quiz;
