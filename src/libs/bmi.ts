/**
 * Compute BMI
 * @param weight Weight value
 * @param height Height value
 * @returns BMI
 */
export const compute = (weight: number, height: number) => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

export const useGetBMIResult = () => {
  return (bmi: number) => {
    let message = "";
    let messageClasses = "";
    if (bmi < 18.5) {
      message = "Underweight";
      messageClasses = "text-yellow-500";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = "Normal weight";
      messageClasses = "text-green-500";
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = "Overweight";
      messageClasses = "text-red-500";
    } else {
      message = "Obesity";
      messageClasses = "text-red-900";
    }

    return { message, messageClasses };
  };
};
