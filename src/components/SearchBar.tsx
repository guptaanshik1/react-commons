import { useEffect, useState } from "react";
import { ISearchCache } from "../utils/data";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCache, setSearchCache] = useState<ISearchCache>({});

  useEffect(() => {
    let timerId;
    timerId = setTimeout(() => {
      searchApiCall();
    }, 400);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  const searchApiCall = () => {
    console.log("API call: ", searchQuery);
    setSearchCache({
      [searchQuery]: [searchQuery],
    });
  };

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
