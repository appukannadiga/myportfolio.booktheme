import React from "react";
import MyBook from "./components/MyBook";
import DesktopToggle from "./components/DesktopToggle";

const App = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-slate-900">
      <DesktopToggle />
      {/* Premium Luxury Studio Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>

      {/* Container for the book */}
      <div className="relative z-10 w-full h-full flex justify-center items-center p-0 md:p-4">
        <MyBook />
      </div>

    </div>
  );
};

export default App;
