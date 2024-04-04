"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  message: string | null;
  errors?: {
    name?: string[];
  }
};

//? Agregar esto para evitar errores en el hook
const CreateBoard = z.object({
  name: z.string().min(3, {
    message: "name must be at least 3 characters",
  }),
});

export async function create(prevState: State, formData: FormData) {
  const ValidateFields = CreateBoard.safeParse({
    name: formData.get("name"),
  });

  if (!ValidateFields.success) {
    return {
      errors: ValidateFields.error.flatten().fieldErrors,
      message: "Missing fields",
      name: formData.get("name") as string,
    };
  }

  const { name } = ValidateFields.data;

  //? faltaba retornar un nuevo estado
  return {
    name,
    message: null,
  };
}
