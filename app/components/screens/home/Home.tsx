import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { white } from 'tailwindcss/colors';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const Home: FC = () => {
	const { navigate } = useTypedNavigation();
	return (
		<View>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
				<Text className='text-white'>Go to login</Text>
			</Pressable>
		</View>
	);
};

export default Home;
