export interface FormLogin {
  userName: string;
  password: string;
}

export interface User {
  id: number;
  userName: string;
  password: string;
  token?: string;
}
