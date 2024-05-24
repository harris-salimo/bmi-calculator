import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BMICalculator } from "./components/BMICalculator";

function App() {
  return (
    <>
      <BMICalculator />
      <ToastContainer />
    </>
  );
}

export default App;
