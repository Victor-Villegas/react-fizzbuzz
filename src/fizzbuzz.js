import React, { useEffect, useState } from 'react';

const WriteText = ({ number: n }) => {
  let text;
  let bgColor;

  if (n % 3 === 0 && n % 5 === 0) {
    text = 'FizzBuzz';
    bgColor = 'green';
  } else if (n % 3 === 0) {
    text = 'Fizz';
    bgColor = 'red';
  } else if (n % 5 === 0) {
    text = 'Buzz';
    bgColor = 'yellow';
  } else {
    text = '---';
    bgColor = '#282c34';
  }

  const style = {
    backgroundColor: bgColor,
    width: '100%'
  };

  return (
    <h1 style={style}>{text}</h1>
  );
};

const FizzBuzz = () => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    margin: '3%'
  };

  const [list, setList] = useState([1]);

  useEffect(() => {
    setInterval(() => setList(prevList => {
        if (prevList.length === 100) {
          prevList = [1];
          return [...prevList];
        }
        return [...prevList, prevList[prevList.length - 1] + 1];
      }
    ), 1000);
  }, []);

  return (
    <>
      <WriteText number={list.length}/>
      <div style={style}>
        {list.map(n => (
          <p>{n}</p>
        ))}
      </div>
    </>
  );
};

export default FizzBuzz;
