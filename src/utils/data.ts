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

export enum TabStates {
  CURRENT = "current",
  PENDING = "pending",
  COMPLETED = "completed",
}

export enum TabConstants {
  FIRST_TAB = "firstTab",
  SECOND_TAB = "secondTab",
  THIRD_TAB = "thirdTab",
  FOURTH_TAB = "fourthTab",
}

export type TTabConfig = { label: TabConstants; state: TabStates };

export interface ITabProperties {
  label: string;
  color: string;
}

export interface IComment {
  id: number;
  name: string;
  title: string;
  numLikes?: number;
  numDislikes?: number;
  replies?: IComment[];
}

export interface ISearchCache {
  [key: string]: Array<string>;
}

export interface IAccordion {
  id: number;
  title: string;
  subAccordions?: IAccordion[];
}

export interface IChatMessage {
  id: number;
  name: string;
  message: string;
}

export interface IUser {
  id: number;
  name: string;
}

export enum PhoneOtpSteps {
  ENTER_PHONE_NUMBER = "enterPhoneNumber",
  ENTER_OTP = "enterOtp",
}
