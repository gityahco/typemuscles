import { useRef, useState } from "react";
import Word from "./Word";
import getCloud from "./getCloud";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState<boolean[]>([]);
  const processUserInput = function (value: string) {
    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => index + 1);
      setUserInput("");
      setCorrectWordArray((data) => {
        const word = value.trim();
        data[activeWordIndex] = word === wordCloud.current[activeWordIndex];
        return data;
      });
    } else {
      setUserInput(value);
    }
  };
  const wordCloud = useRef<string[]>(getCloud());
  return (
    <>
      <h1>Typeing test</h1>
      <p>
        {wordCloud.current.map((word: string, index: number) => {
          return (
            <Word
              key={index}
              text={word}
              active={index === activeWordIndex}
              correct={correctWordArray[index]}
            />
          );
        })}
      </p>
      <input
        type="text"
        value={userInput}
        onChange={({ target: { value } }) => processUserInput(value)}
      ></input>
    </>
  );
}
