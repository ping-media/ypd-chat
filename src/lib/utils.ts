import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";
import { createTransform } from "redux-persist";

const SECRET_KEY = import.meta.env.VITE_secret;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WEB_NAME = import.meta.env.VITE_SITE_NAME;

export const getErrorMessage = (error: unknown): string => {
  return error instanceof Error ? error.message : "An unknown error occurred";
};

export const encryptedAdminTransform = createTransform<any, string>(
  // transform state on its way to being serialized and persisted
  (inboundState: any) => {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      SECRET_KEY
    ).toString();
    return encrypted;
  },

  // transform state being rehydrated
  (outboundState: string) => {
    try {
      const bytes = CryptoJS.AES.decrypt(outboundState, SECRET_KEY);
      const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedStr) as any;
    } catch (e) {
      console.error("Failed to decrypt admin state:", e);
      return { email: null, userName: null, role: null, id: null };
    }
  }
);

export const formatHyphenWord = (text: string): string => {
  if (!text.includes("-")) return text;

  const [first, second] = text.split("-");
  const capitalizedSecond = second.charAt(0).toUpperCase() + second.slice(1);
  return `${first} ${capitalizedSecond}`;
};

export const formatNumber = (price: number) => {
  return new Intl.NumberFormat("en-In", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(price);
};

export const waitForRehydration = (persistor: any) => {
  return new Promise<void>((resolve) => {
    const unsub = persistor.subscribe(() => {
      const { bootstrapped } = persistor.getState();
      if (bootstrapped) {
        unsub();
        resolve();
      }
    });
  });
};

export const prepareMessages = (data: any) => {
  if (!data || typeof data !== "object") {
    return { introMessages: [], questions: [], completionMessage: "" };
  }

  const introMessages: string[] = [];
  const questions: any[] = [];
  let completionMessage = "";

  if (data.welcome_message) introMessages.push(data.welcome_message);
  if (data.motivation_message) introMessages.push(data.motivation_message);
  if (Array.isArray(data.questions)) questions.push(...data.questions);
  if (data.completion_message) completionMessage = data.completion_message;

  return { introMessages, questions, completionMessage };
};
