import { InputProps, Input as ReactInput } from "@headlessui/react";

export const Input = (props: InputProps) => {
  return (
    <ReactInput
      {...props}
      className="mt-2 block w-full border-none bg-gray-300 px-3 py-1.5 text-sm/6 text-gray-700 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:data-[focus]:outline-gray-700"
    />
  );
};
