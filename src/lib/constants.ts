import { z } from "zod";

const constantsSchema = z.object({
  APP_NAME: z.string().default("NxtAmzn"),
  APP_SLOGAN: z.string().default("Spend less, enjoy more."),
  APP_DESCRIPTION: z
    .string()
    .default("An amazon clone built with Next.js and MongoDB."),
});

const result = constantsSchema.safeParse(process.env);

if (!result.success) {
  throw new Error(JSON.stringify(result.error.flatten().fieldErrors));
}

export const { APP_NAME, APP_SLOGAN, APP_DESCRIPTION } = result.data;
