import { AxiosError } from "axios";

export type LoginInputErrors = {
  messages: string
}

export type errorType = {
  stepOne?: string | undefined
  stepTwo?: string | undefined
  stepSix?: string | undefined
}

export type ForgotPasswordErrors = {
  message: string
}


export type AxiosErrorType = AxiosError & {
  response?: {
    data?: {
      message?: string;
      code?: number;
      errors?: Record<string, string[]>; // In case errors come in a nested format
    };
    status?: number;
    statusText?: string;
  };
};


