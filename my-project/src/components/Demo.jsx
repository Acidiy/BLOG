import { useRef } from "react"

export const Demo = ({ }) => {
    const Name = useRef();

    const focusInput = () => {
        Name.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={Name} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}