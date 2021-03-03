declare global {
  interface Window {
    oc: {
      cmd: {
        push: (oc: any) => void,
      },
      events: {
        on: (eventName: string, fn: (...data: any[]) => void) => void;
        fire: (eventName: string, data?: any) => void;
      };
    };
  }
}

export interface AcceptLanguage {
  code: string;
  script?: any;
  region: string;
  quality: number;
}

export interface Env {
  name: string;
}

export interface Plugins {}

export interface RequestHeaders {
  host: string;
  connection: string;
  accept: string;
  'user-agent': string;
  'content-type': string;
  referer: string;
  'accept-encoding': string;
  'accept-language': string;
}

export interface External {
  global: string;
  url: string;
  name: string;
}

export interface Template {
  type: string;
  version: string;
  externals: External[];
}

export interface Context<T = any> {
  acceptLanguage: AcceptLanguage[];
  baseUrl: string;
  env: Env;
  params: T;
  plugins: Plugins;
  requestHeaders: RequestHeaders;
  staticPath: string;
  templates: Template[];
  setEmptyResponse: () => void;
}
