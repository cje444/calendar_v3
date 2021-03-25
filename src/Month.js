import React from "react";
import styled from "styled-components";

//https://bigtop.tistory.com/64?category=827794
const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

//지난달 마지막 날짜(date) 요일(day)
const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

//이번달 마지막 날짜(date) 요일(day)
const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
  }
}

for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

const Month = (props) => {
  console.log(dates);
  return (
    <CalendarContainer>
      <CalHeader>
        <BtnNext>←</BtnNext>
        <h1>
          {viewYear}년 {viewMonth + 1}월{" "}
        </h1>

        <BtnBefore>→</BtnBefore>
      </CalHeader>

      <DaysBox>
        <Sun>일</Sun>
        <Week>월</Week>
        <Week>화</Week>
        <Week>수</Week>
        <Week>목</Week>
        <Week>금</Week>
        <Sat>토</Sat>
      </DaysBox>
      <DateBox>
        {dates.map((date, index) => {
          return <EveryDay key={index}>{date}</EveryDay>;
        })}
      </DateBox>
    </CalendarContainer>
  );
};

const CalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & h1 {
    color: #364f6b;
    margin: 20px;
  }
`;

const BtnBefore = styled.div`
  background-color: #364f6b;
  color: white;
  height: 40px;
  width: 40px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 30px;
  margin:20px;
`;

const BtnNext = styled.div`
background-color: #364f6b;
color: white;
height: 40px;
width: 40px;
font-size: 30px;
font-weight: bold;
border-radius: 30px;
margin:20px;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  with: 100;
  align-item: center;
  text-align: center;
`;

const DaysBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  align-item: center;
  text-align: center;
  width: 93%;
  margin: auto;
`;

const Sun = styled.div`
  background-color: white;
  color: tomato;
  margin: 10px;
  width: 13%;
`;

const Week = styled.div`
  background-color: white;
  color: black;
  margin: 10px;
  width: 13%;
`;

const Sat = styled.div`
  background-color: white;
  color: blue;
  margin: 10px;
  width: 13%;
`;
const DateBox = styled.div`
  dixplay: flex;
  flex-direction: row;
  background-color: white;
  align-item: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

const EveryDay = styled.div`
  width: 13%;
  height: 150px;
  text-align: right;
  background-color: #f5f5f5;
  float: left;
  border: 1px solid white;
  display: inline-block;
  margin: auto;
`;

export default Month;
