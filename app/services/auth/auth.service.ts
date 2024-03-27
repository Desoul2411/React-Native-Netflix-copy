import AsyncStorage from '@react-native-async-storage/async-storage';

import { EnumAsyncStorage, IAuthResponse } from '@/shared/types/auth.interface';

import { getAuthUrl } from '@/config/api.config';

import { deleteTokensStorage, saveToStorage } from '../api/helper.auth';
import { request } from '../api/request.api';

export const AuthService = {
	async main(variant: 'reg' | 'login', email: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`/${variant === 'reg' ? 'regoster' : 'login'}`),
			method: 'POST',
			data: { email, password }
		});

		if (response.accessToken) await saveToStorage(response);
		return response;
	},
	async logout() {
		await deleteTokensStorage();
		await AsyncStorage.removeItem(EnumAsyncStorage.USER);
	}
};
