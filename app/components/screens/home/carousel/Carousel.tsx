import React, { FC } from 'react';
import { View } from 'react-native';

import { IMovie } from '@/shared/types/movie.interface';

import CarouselItem from './carousel-item/CarouselItem';

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<View>
			{movies.map(movie => (
				<CarouselItem movie={movie} key={movie._id} />
			))}
		</View>
	);
};

export default Carousel;
