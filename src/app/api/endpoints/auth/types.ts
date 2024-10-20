import { Response } from 'repositories/Api/models/Response';

export interface PreRegistrationArgs {
  email: string;
  token: string | null;
}

export interface CheckCodeArgs {
  model: string;
  systemName: string;
  systemVersion: string;
  email: string;
  code: string;
  token?: string | null;
}

export interface CheckCodeResponse extends Omit<Response, 'payload'> {
  payload: {
    regKey?: string;
  };
}

export interface RegistrationArgs {
  regKey: string;
  password: string;
}

export interface LoginArgs {
  login: string;
  password: string;
  token?: string | null;
  loginControl?: number;
  model: string;
  systemName: string;
  systemVersion: string;
}

export interface LoginResponse<T> extends Omit<Response, 'payload'> {
  payload: T | { loginControl: number } | string;
}

export interface SocialNetworkArgs {
  model: string;
  systemName: string;
  systemVersion: string;
  s: string;
  otk?: string;
  loginControl?: number;
}

export interface SocialNetworkResponse<T> extends Omit<Response, 'payload'> {
  payload: SocialNetworkPayloadResponse<T> | { loginControl: number };
}

type SocialNetworkPayloadResponse<T> = T & {
  regKey?: string;
  registrationKey?: string;
  key?: string;
  userKey?: string;
};

export enum SocialNetworkOptions {
  apple = 'apple',
  google = 'google',
  facebook = 'facebook',
}

export interface AuthEmailCodeCheckResponse<T> extends Omit<Response, 'payload'> {
  payload: T | { key: string };
}

export interface Auth2FAArgs {
  model: string;
  systemName: string;
  systemVersion: string;
  key: string | null;
  code: string;
  userKey: string | null;
}

export interface Auth2FAResponse<T> extends Omit<Response, 'payload'> {
  payload: T;
}

export interface Auth3FAArgs {
  authToken: string;
  sysId: string;
}

export interface Auth3FAResponse<T> extends Omit<Response, 'payload'> {
  payload: T;
}

export interface Auth2FAGenerateKeyResponse extends Omit<Response, 'payload'> {
  payload: string;
}

export interface CreateOtkResponse extends Omit<Response, 'payload'> {
  payload: {
    otk: string;
  };
}
