import AccordionContainer from "./components/Accordions/AccorionContainer";
import LiveChatContainer from "./components/Chat/LiveChatContainer";
import CommentsContainer from "./components/Comments/CommentsContainer";
import PlayTimer from "./components/PlayTimer";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      {/* <GetPosts /> */}
      {/* <TimeoutComponent /> */}
      <LiveChatContainer />
      <Tabs />
      <PlayTimer />
      <SearchBar />
      <CommentsContainer />
      <AccordionContainer />
    </div>
  );
};

export default App;
