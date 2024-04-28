import { useState } from "react";
import AccordionContainer from "./components/Accordions/AccorionContainer";
import LiveChatContainer from "./components/Chat/LiveChatContainer";
import CommentsContainer from "./components/Comments/CommentsContainer";
import PlayTimer from "./components/PlayTimer";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import { UserData } from "./contexts/useGlobalContext";
import Home from "./components/Home";
import GetPosts from "./components/GetPosts";
import GetUser from "./components/GetUser";
import ArraysOfFunctions from "./components/ArraysOfFunctions";
import CounterHoc from "./components/Counter/CounterHoc";
import Counter from "./components/Counter/Counter";
import PhoneNumber from "./components/PhoneOtp/PhoneNumber";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = () => {
  const [name, setName] = useState("John");

  return (
    <div
      className="flex flex-col"
      style={{ margin: "auto", textAlign: "center" }}
    >
      <GetUser />
      <GetPosts />
      <CounterHoc Comp={Counter} />
      <PhoneNumber />
      <ProgressBar />
      {/* <TimeoutComponent /> */}
      <UserData.Provider value={{ name, setName }}>
        {/* <LiveChatContainer /> */}
        <Tabs />
        {/* <PlayTimer />
        <SearchBar />
        <CommentsContainer />
        <AccordionContainer />
        <Home />
        <ArraysOfFunctions /> */}
      </UserData.Provider>
    </div>
  );
};

export default App;
