import React from "react";
// import Button from "./shared/component/Button/Button";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBarHorizontal from "./parts/NavBarHorizontal/NavBarHorizontal";
import Footer from "./parts/Footer/Footer";

function App() {
  return (
    <div className="App ">
      <div className="2xl:mx-20">
        <NavBarHorizontal />
      </div>
      <hr className="border-t-2 " />
      <div className="2xl:mx-20">
        <Home />
      </div>
      <hr className="border-t-2 mt-40" />
      <div className="2xl:mx-20">
        <div className="flex sm:flex-row my-14 mx-10 md:mx-14 xl:mx-32 2xl:mx-96">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
