import React, { useState, useEffect } from "react";

const GameRoom = () => {
  const [number, setNumber] = useState(0);
  let [garbage, setGarbage] = useState([]);
  let numberPocket = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    "joker"
  ];

  let targetNumber = numberPocket[Math.floor(Math.random() * numberPocket.length)];
  

  const contractNum = () => {
    numberPocket.splice(numberPocket.indexOf(targetNumber), 1);
    setNumber(targetNumber)
    garbage.push(targetNumber)
    console.log(garbage)
    targetNumber = numberPocket[Math.floor(Math.random() * numberPocket.length)];
  };
  useEffect(()=>{
    // console.log(targetNumber, numberPocket);
  })
  
  return (
    <>
      <h1>Hi gameRoom</h1>
      <h2>현재 뽑힌 숫자 {number}</h2>
      <h2>여지껏 뽑힌 숫자 {garbage.join(",")}</h2>
      <button onClick={contractNum}>번호 추출</button>
    </>
  );
};

export default GameRoom;
