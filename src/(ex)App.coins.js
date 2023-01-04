// Coin API 를 가져오는 앱임
// USD 기준으로 표시하도록 만들었지만, 각 코인으로 단위 변환해보는 챌린지 해봐야 함.
/* 

import { useState, useEffect } from "react";
// useEffect 는 특정한 코드를 딱 한 번만 실핼될 수 있도록 보호해줌

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `({coins.length} EA)`}</h1>

      {loading ? <strong>Loading...</strong> : null}

      <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

*/
