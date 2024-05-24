import { ButtonProps, Button as ReactButton } from "@headlessui/react";

export const Button = (props: ButtonProps) => {
  return (
    <ReactButton
      {...props}
      className="mt-4 inline-flex w-96 items-center justify-center gap-2 bg-gray-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {props.children}
    </ReactButton>
  );
};
