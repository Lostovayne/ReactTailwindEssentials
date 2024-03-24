// type ExtractColor<S extends string> = S extends `text-${infer R}-500` ?  R : "not red";
// type Color = ExtractColor<"text-blue-500">;
// infiere que el color es blue

const colors = ["text-red-500", "text-green-500", "text-blue-500"] as const;

type ExtractColor<S extends string> = S extends `text-${infer R}-500` ? R : S;
type Color = ExtractColor<(typeof colors)[number]>; // colores [ "red", "green", "blue"]


/**
 * Encuentra el primer color que incluye el parámetro color.
 * @param {Color} color - El color a buscar.
 * @returns {(typeof colors)[number] | undefined} - El primer color que incluye el parámetro color, o undefined si no se encuentra.
 */
const findColor = (color: Color): (typeof colors)[number] | undefined => {
  return colors.find((c) => c.includes(color));
};

findColor("red");