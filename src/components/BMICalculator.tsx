import { Field } from "@headlessui/react";
import { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "../hooks/useForm";
import { compute, useGetBMIResult } from "../libs/bmi";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export const BMICalculator = () => {
  const { data, setData } = useForm<{ weight: number; height: number }>({
    weight: 0,
    height: 0,
  });
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [messageClasses, setMessageClasses] = useState("");
  const getBMIResult = useGetBMIResult();

  const calculateBMI: FormEventHandler = (evt) => {
    evt.preventDefault();

    if (data.weight > 0 && data.height > 0) {
      const bmiValue = compute(data.weight, data.height);
      setBmi(bmiValue);
      const { message: bmiMessage, messageClasses: bmiMessageClasses } =
        getBMIResult(bmiValue);
      setMessageClasses(bmiMessageClasses);
      setMessage(bmiMessage);
    } else {
      toast.error("Please enter valid values for weight and height.");
    }
  };

  return (
    <div className="bmi-calculator prose flex h-screen max-w-full flex-col items-center justify-center bg-gray-100 dark:prose-invert dark:bg-gray-900">
      <h2>BMI Calculator</h2>
      <form onSubmit={(e) => console.log(e)}>
        <Field className="w-96">
          <Label>Weight (kg):</Label>
          <Input
            type="number"
            value={data.weight}
            onChange={(e) =>
              setData((v) => ({ ...v, weight: Number(e.target.value) }))
            }
          />
        </Field>
        <Field className="mt-4 w-96">
          <Label>Height (cm):</Label>
          <Input
            type="number"
            value={data.height}
            onChange={(e) =>
              setData((v) => ({ ...v, height: Number(e.target.value) }))
            }
          />
        </Field>
        <Button type="submit" onClick={calculateBMI}>
          Calculate BMI
        </Button>
      </form>
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
};
