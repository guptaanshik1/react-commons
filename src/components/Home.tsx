import { useContext } from "react";
import { UserData } from "../contexts/useGlobalContext";

const Home = () => {
  // @ts-ignore
  const { name } = useContext(UserData);
  return <div>Home - {name}</div>;
};

export default Home;
