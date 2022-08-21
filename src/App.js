import React, { useState } from "react";
import "./App.css";

function App() {
  const initialState = { weight: 0, height: 0 };

  const [bmi, setBmi] = useState(0);
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Set the BMI after calculate it
    setBmi(
      state.weight &&
        (state.weight / Math.pow(state.height / 100, 2)).toFixed(2)
    );

    // Reinitiate the state
    setState(initialState);
  }

  return (
    <div className="App">
      <main>
        <p>Votre indice de masse corporelle est de: {bmi}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="weight">Poids (en kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              min="0"
              max="999"
              value={state.weight}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="height">Hauteur (en cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              min="0"
              max="999"
              value={state.height}
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Calculer" />
        </form>
      </main>
    </div>
  );
}

export default App;
