import React, {useState} from "react";
import './Square.css'

const Square = () => {
    const [_value, set_Value] = useState(null)

    const changeValue = () => {
        set_Value("X")
    }

  return (
    <div className=" w-16 h-16 border-2 border-black rounded-lg flex justify-center items-center cursor-pointer text-3xl font-bold" onClick={changeValue}>{_value}</div>
  );
};

export default Square;
