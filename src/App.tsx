import React from "react";

type Props = {
  name: string;
  imageUrl: string;
};

const App = (props: Props) => {
  console.log(props.name);
  console.log(props.imageUrl);

  function sum(num1: number, num2: number) {
    return num1 + num2;
  }

  const result = sum(3, 6);
  console.log(`result: {$result}`);

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.imageUrl} width="300" />
    </div>
  );
};

export default App;
