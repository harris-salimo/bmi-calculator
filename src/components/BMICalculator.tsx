import { Button, Field, Input, Label } from "@headlessui/react";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export function BMICalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [messageClasses, setMessageClasses] = useState("");

  const calculateBMI = useCallback(() => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue);
      let bmiMessage = "";
      let bmiMessageClasses = "";
      if (bmiValue < 18.5) {
        bmiMessage = "Underweight";
        bmiMessageClasses = "text-yellow-500";
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiMessage = "Normal weight";
        bmiMessageClasses = "text-green-500";
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiMessage = "Overweight";
        bmiMessageClasses = "text-red-500";
      } else {
        bmiMessage = "Obesity";
        bmiMessageClasses = "text-red-900";
      }
      setMessageClasses(bmiMessageClasses);
      setMessage(bmiMessage);
    } else {
      toast.error("Please enter valid values for weight and height.");
    }
  }, [height, weight]);

  return (
    <div className="bmi-calculator prose flex h-screen max-w-full flex-col items-center justify-center bg-gray-100 dark:prose-invert dark:bg-gray-900">
      <h2>BMI Calculator</h2>
      <Field className="w-96">
        <Label className="text-sm/6 font-medium text-gray-800 dark:text-gray-200">
          Weight (kg):
        </Label>
        <Input
          className="mt-2 block w-full border-none bg-gray-300 px-3 py-1.5 text-sm/6 text-gray-700 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:data-[focus]:outline-gray-700"
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </Field>
      <Field className="mt-4 w-96">
        <Label className="text-sm/6 font-medium text-gray-800 dark:text-gray-200">
          Height (cm):
        </Label>
        <Input
          className="mt-2 block w-full border-none bg-gray-300 px-3 py-1.5 text-sm/6 text-gray-700 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:data-[focus]:outline-gray-700"
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </Field>
      <Button
        className="mt-4 inline-flex w-96 items-center justify-center gap-2 bg-gray-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        onClick={calculateBMI}
      >
        Calculate BMI
      </Button>
      {!!bmi && (
        <div>
          <h3>Your BMI: {bmi.toFixed(2)}</h3>
          <p className={`text-center ${messageClasses}`}>
            <b>
              <i>{message}</i>
            </b>
          </p>
        </div>
      )}
    </div>
  );
}
