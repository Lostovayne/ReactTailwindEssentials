
type ExtractColor<S extends string> = S extends `text-${infer R}-500` ?  R : "not red";
type Color = ExtractColor<"text-blue-500">; // infiere que el color es blue
