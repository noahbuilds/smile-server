import dotenv from "dotenv";
dotenv.config();

export const SMILE_PARTNER_ID = process.env.SMILE_PARTNER_ID!;
export const SMILE_API_KEY = process.env.SMILE_API_KEY!;
export const SMILE_ENVIRONMENT = process.env.SMILE_ENVIRONMENT || "sandbox";
