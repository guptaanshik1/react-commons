import CommentsContainer from "./components/Comments/CommentsContainer";
import PlayTimer from "./components/PlayTimer";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      {/* <GetPosts /> */}
      {/* <TimeoutComponent /> */}
      <Tabs />
      <PlayTimer />
      <SearchBar />
      <CommentsContainer />
    </div>
  );
};

export default App;
