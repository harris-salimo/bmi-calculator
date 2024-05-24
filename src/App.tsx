import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BMICalculator } from "./components/BMICalculator";

const App = () => {
  return (
    <>
      <BMICalculator />
      <ToastContainer />
    </>
  );
};

export default App;
