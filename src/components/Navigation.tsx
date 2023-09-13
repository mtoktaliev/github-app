import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-12 shadow-md bg-slate-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="font-bold">GitHub Search App</h3>
        <div className="flex gap-10">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
