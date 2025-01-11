declare global {
  namespace App {
    interface Locals {
      user: import("$lib/server/auth").SessionValidationResult["user"];
      session: import("$lib/server/auth").SessionValidationResult["session"];
    }
  }

  interface Window {
    SpeechRecognition: unknown;
    webkitSpeechRecognition: unknown;
  }
}

export {};
