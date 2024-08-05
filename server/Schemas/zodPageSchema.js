import z from "zod";

const pageSchemaZod = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  pageLink: z.string().url("Invalid URL"),
  category: z.string(),
});

export default pageSchemaZod;
