export class RegisterDto {
  email: string;
  password: string;
  name: string;
  phone?: string;
  isServiceProvider?: boolean;
}

export class LoginDto {
  email: string;
  password: string;
}