import z from "zod";

const authSchemaZod = z.object({
  userName: z.string().min(1, "username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default authSchemaZod;
