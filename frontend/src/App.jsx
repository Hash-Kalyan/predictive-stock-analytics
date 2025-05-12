
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ticker, setTicker] = useState('AAPL');
  const [predictions, setPredictions] = useState([]);

  const fetchPredictions = async () => {
    const res = await axios.get(`http://localhost:8000/predict/${ticker}`);
    setPredictions(res.data);
  };

  return (
    <div>
      <h1>Stock Price Prediction</h1>
      <input value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Enter Stock Ticker" />
      <button onClick={fetchPredictions}>Predict</button>
      <div>
        {predictions.map((pred, index) => (
          <div key={index}>
            <p>Date: {new Date(pred.ds).toDateString()}</p>
            <p>Predicted Price: ${pred.yhat.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
