import { useState } from "react";
import AccordionContainer from "./components/Accordions/AccorionContainer";
import LiveChatContainer from "./components/Chat/LiveChatContainer";
import CommentsContainer from "./components/Comments/CommentsContainer";
import PlayTimer from "./components/PlayTimer";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import { UserData } from "./contexts/useGlobalContext";
import Home from "./components/Home";

const App = () => {
  const [name, setName] = useState("John");

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      {/* <GetPosts /> */}
      {/* <TimeoutComponent /> */}
      <UserData.Provider value={{ name, setName }}>
        <LiveChatContainer />
        <Tabs />
        <PlayTimer />
        <SearchBar />
        <CommentsContainer />
        <AccordionContainer />
        <Home />
      </UserData.Provider>
    </div>
  );
};

export default App;
