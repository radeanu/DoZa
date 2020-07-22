export interface FormLogin {
  userName: string;
  password: string;
  email?: string;
  birdthday?: string;
  gender?: string;
}

export interface User {
  id: number;
  userName: string;
  password: string;
  token?: string;
}
