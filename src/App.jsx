import React from "react";

function App() {
  return (
    <React.Fragment>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <h1 className="text-[#9e78cf] mt-5 font-bold text-[2rem] text-center">
        Todo App
      </h1>
      <div className="text-center mt-8 ">
        <input
          type="text"
          placeholder="Add a new Task"
          className="border-[#9E78CF] border-2  rounded-xl  sm:w-[25rem] w-[70%] p-2 outline-none bg-[#0D0714] text-white"
        />
        <button className="bg-[#9E78CF] ml-2 rounded-lg pl-3 pr-3 pb-2 pt-1 text-white text-[1.5rem]">+</button>
        <p className="text-white mt-5  sm:mr-[23rem] mr-[60%]">Tasks to do</p>
      </div>
      <div></div>
    </React.Fragment>
  );
}

export default App;
