import { LabelProps, Label as ReactLabel } from "@headlessui/react";

export const Label = (props: LabelProps) => {
  return (
    <ReactLabel className="text-sm/6 font-medium text-gray-800 dark:text-gray-200">
      {props.children}
    </ReactLabel>
  );
};
