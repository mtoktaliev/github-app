import React from "react";
import { useSearchUsersQuery } from "../store/github.api";

const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery("vladilen");
  return (
    <div>
      {isError && <p className="text-center text-6xl text-red-700">Error</p>}
    </div>
  );
};

export default HomePage;
