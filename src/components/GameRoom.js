import React, { useState, useEffect } from 'react';

import './GameRoom.css';

/* eslint-disable */
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
	'*'
];

const GameRoom = () => {
	const [ number, setNumber ] = useState(0);
	const [ garbageNum, setGarbageNum ] = useState(20);
	const [ garbage1 ] = useState([]);
	const [ garbage2 ] = useState([]);
	const [ garbage3 ] = useState([]);
	const [ garbage4 ] = useState([]);

	let targetNumber = numberPocket[Math.floor(Math.random() * numberPocket.length)];

	const contractNum = () => {
		console.log(numberPocket.indexOf(targetNumber));
		// 숫자 빼기
		numberPocket.splice(numberPocket.indexOf(targetNumber), 1);

		// 숫자 설정
		setNumber(targetNumber);

		// 각 배열에 분배
		if (garbage1.length < 5) {
			garbage1.push(targetNumber);
		} else if (garbage2.length < 5) {
			garbage2.push(targetNumber);
		} else if (garbage3.length < 5) {
			garbage3.push(targetNumber);
		} else {
			garbage4.push(targetNumber);
		}

		// 횟수 측정
		setGarbageNum(garbageNum - 1);

		console.log(numberPocket);
	};
	useEffect(() => {
		// console.log(targetNumber, numberPocket);
	});

	return (
		<div className="GameRoom">
			<div className="LeftSection">
				<div className="contractNumsArray">
					<div className="contractNumsArrayItems">
						{garbage1.map((item, index) => (
							<div className="contractsNums" key={index}>
								{item}
							</div>
						))}
					</div>
					<div className="contractNumsArrayItems">
						{garbage2.map((item, index) => (
							<div className="contractsNums" key={index}>
								{item}
							</div>
						))}
					</div>
					<div className="contractNumsArrayItems">
						{garbage3.map((item, index) => (
							<div className="contractsNums" key={index}>
								{item}
							</div>
						))}
					</div>
					<div className="contractNumsArrayItems">
						{garbage4.map((item, index) => (
							<div className="contractsNums" key={index}>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="RightSection">
				<h2>남은 추첨 횟수 : {garbageNum}</h2>
				<div className="currentNum">{number}</div>
				{garbageNum > 0 ? <button onClick={contractNum}>번호 추출</button> : <h1>게임이 끝났습니다</h1>}
			</div>
		</div>
	);
};

export default GameRoom;
