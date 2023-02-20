import { useState } from "react";
import "./Glitch.css";

function Glitch(props) {
  const word = props.word;
  const length = word.length;

  const [w, setW] = useState("");
  const [it, setIt] = useState(0);
  const [rp, setRp] = useState("");

  function rand_letters(l) {
    let word = "";
    for (let i = 0; i < l; i++) {
      word += String.fromCharCode(65 + Math.round(Math.random() * 26));
    }
    return word;
  }
  setTimeout(() => {
    if (length >= it) {
      setRp(rand_letters(length - it - 1));
      setW(word.slice(0, it) + rp);
      setIt((i) => i + 1);
    }
  }, 200);

  return <div className="word">{w}</div>;
}

export default Glitch;
