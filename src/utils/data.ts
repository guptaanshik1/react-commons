export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IMutationOptions {
  onSuccess?: <T>(data?: T) => void;
  onError?: <T>(data?: T) => void;
}

export type TPathVariables = Record<string, any>;
