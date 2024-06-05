import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "message must be atleast 10 character " })
    .max(300, { message: "message not more than 300 character" }),
});
