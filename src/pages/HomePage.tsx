import React, { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/github.api";
import { useDebounce } from "../hooks/debounce";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <div className="flex justify-center mx-auto pt-10 h-screen w-screen">
      {isError && <p className="text-center text-4xl text-red-700">Error</p>}
      {isLoading && (
        <p className="text-center text-4xl text-green-700">Loading...</p>
      )}
      {data && (
        <div className="container relative">
          <input
            className="border py-2 px-4 w-full h-10 mb-2"
            placeholder="Search Github user..."
            type="text"
            value={search}
            onChange={handleChange}
          />
          <div className="absolute top-10 left-0 right-0 max-h-48 shadow-md bg-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            nihil!
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
