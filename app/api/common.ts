import { NextRequest } from "next/server";

const OPENAI_URL = "api.openai.com";
const DEFAULT_PROTOCOL = "https";
const PROTOCOL = process.env.PROTOCOL ?? DEFAULT_PROTOCOL;
const BASE_URL = process.env.BASE_URL ?? OPENAI_URL;

export async function requestOpenai(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const env = checkEnv(userAgent);

  const apiKey = env.isCoach
    ? req.headers.get("token")
    : process.env.STAFF_OPENAI_API_KEY;
  const openaiPath = req.headers.get("path");

  return fetch(`${PROTOCOL}://${BASE_URL}/${openaiPath}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: req.method,
    body: req.body,
  });
}

export function checkEnv(userAgent: string) {
  const staffAppReg = /FitnessTrainerAssistant\/(\d+(?:\.\d+){0,2}).+Staff/i;
  const coachAppReg =
    /FitnessTrainerAssistant\/(\d+(?:\.\d+){0,2})(?!.+Staff)/i;

  const isStaff = staffAppReg.test(userAgent);
  const isCoach = coachAppReg.test(userAgent);

  return {
    isInQcApp: isCoach || isStaff,
    isCoach,
    isStaff,
  };
}
