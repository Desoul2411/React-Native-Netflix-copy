import { IUser } from './user.interface';

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}

export enum EnumSecureStore {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
	USER = 'USER'
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IAuthResponse extends ITokens {
	user: IUser;
}
