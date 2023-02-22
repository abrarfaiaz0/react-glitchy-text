import { useState } from "react";
import "./Glitch.css";

function Glitch(props) {
  const word = props.word;
  const length = word.length;

  const [w, setW] = useState(props.word);

  let pp = "";

  function rand_letters(l) {
    let word = "";
    for (let i = 0; i < l; i++) {
      word += String.fromCharCode(65 + Math.round(Math.random() * 26));
    }
    return word;
  }

  function glitch() {
    let it = 0;
    const a = setInterval(() => {
      pp = rand_letters(length - it);
      setW(word.slice(0, it) + pp);

      if (it >= length) clearInterval(a);
      console.log(it, length);
      it += 1 / 3;
    }, 20);
  }

  console.log(props.word, length);

  return (
    <div
      className="word"
      onMouseEnter={() => {
        glitch();
      }}
    >
      {w}
    </div>
  );
}

export default Glitch;
