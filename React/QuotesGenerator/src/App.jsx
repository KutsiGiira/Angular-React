import { useEffect, useState } from 'react';

function App() {
  const [Quote, setQuote] = useState([]);
  const [Curr, setCurr] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((d) => {
        setQuote(d);
        setCurr(d[0]); 
      });
  }, []);

  function randQuote() {
    let rndm = Math.floor(Math.random() * Quote.length);
    setCurr(Quote[rndm]);
  }
  return (
    <>
      <h1>{Curr.quote}</h1>
      <h2>{Curr.author }</h2>
      <button onClick={randQuote}>Get Another</button>
    </>
  );
}

export default App;
