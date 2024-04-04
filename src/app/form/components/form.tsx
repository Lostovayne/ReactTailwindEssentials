"use client";
import { useFormState } from "react-dom";
import { create } from "../../../../actions/sendForm";

export const Form = () => {
  const initialState = {
    name: "",
    message: null,
  };

  //? toma una función que retorna un nuevo estado y aparte un estado inicial
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <input name="name" type="text" placeholder="name" className="p-1 border" />
      <button type="submit">Send</button>
    </form>
  );
};
