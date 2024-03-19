import * as SplashScreen from 'expo-splash-screen';
import React, {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react';

import { IUser } from '@/shared/types/user.interface';

import { IContext, TypeUserState } from './auth-provider.interface';

export const AuthContext = createContext({} as IContext);

SplashScreen.preventAutoHideAsync();

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser);

	useEffect(() => {
		let mounted = true;

		const checkAccessToken = async () => {
			try {
			} catch (error) {
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		checkAccessToken();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
