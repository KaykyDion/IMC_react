import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(false);
  const [classificacao, setClassificacao] = useState("");

  function calculaIMC() {
    setResultado((peso / (altura * altura)).toFixed(2));
  }

  useEffect(() => {
    if (resultado < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (resultado >= 18.5 && resultado < 24.9) {
      setClassificacao("Peso normal");
    } else if (resultado >= 24.9 && resultado < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (resultado >= 29.9 && resultado < 34.9) {
      setClassificacao("Obesidade grau 1");
    } else if (resultado >= 34.9 && resultado < 39.9) {
      setClassificacao("Obesidade grau 2");
    } else {
      setClassificacao("Obesidade grau 3");
    }
  }, [resultado]);

  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <form>
        <div>
          <label htmlFor="heightInput">Altura:</label>
          <input
            onInput={(e) => setAltura(e.target.value)}
            className="form-control"
            id="heightInput"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="weightInput">Peso:</label>
          <input
            onInput={(e) => setPeso(e.target.value)}
            className="form-control"
            id="weightInput"
            type="number"
          />
        </div>
        <button onClick={calculaIMC} type="button" className="btn btn-dark">
          Calcular IMC
        </button>
      </form>
      {resultado && (
        <div className="result">
          <b>Resultado:</b>
          <h2>{resultado}</h2>
          <b>{classificacao}</b>
        </div>
      )}
    </div>
  );
}

export default App;
