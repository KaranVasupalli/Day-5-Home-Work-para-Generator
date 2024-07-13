import { useState } from "react";
import "./App.css";
import data from './data.js'

function App() {
  const [number, setNumber] = useState(); 
  const [para, setpara] = useState([]);


  const generate = () => {
    if(number <= 0){
      alert("Please enter value greater than 0 ")
    }
    else{
      if(number > 10){
        alert("Please enter value less than 11")
      }
      else{
        setpara(data.slice(0, number))
      }
    }
  };

  return (
    <>
      <div className="">
        <h1 className=" text-center mb-14 text-red-500 text-7xl">
          Paragraph Generator
        </h1>
        <div>
          <div className=" flex gap-4 justify-center items-center mb-7" >
            <h2 className=" text-3xl">Paragraphs :</h2>
            <input
              type="number"
              name=""
              id=""
              className=" outline-gray-800 border  border-slate-900 px-2 w-32 rounded-sm"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <button onClick={generate} className=" px-4 py-2 bg-red-500  rounded-md text-white">
              GENERATE
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 ">
        {
          para.map((item, index) => {
            return <p className="w-[650px] text-xl border border-black p-3 " key={index}>{item}</p>;
          })
        }
        </div>
      </div>
    </>
  );
}

export default App;
