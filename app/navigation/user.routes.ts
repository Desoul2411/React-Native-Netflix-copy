import Auth from '@/components/screens/auth/Auth';
import Home from '@/components/screens/home/Home';

import { adminRoutes } from './admin.routes';
import { IRoute } from './navigation.types';

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	}
];

export const routes = [...userRoutes, ...adminRoutes];
