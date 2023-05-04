import { forwardRef, useRef, useImperativeHandle } from "react";

interface MyInputProps extends React.HTMLProps<HTMLInputElement> {}

interface MyInputRef {
  focus(): void;
  scrollIntoView(): void;
}

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current!.focus();
        },
        scrollIntoView() {
          inputRef.current!.scrollIntoView();
        },
      };
    },
    []
  );

  return (
    <>
      <input {...props} ref={inputRef} className="border border-gray-300" />
    </>
  );
});

export default MyInput;
