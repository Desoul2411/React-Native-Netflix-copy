import React from 'react';

import { Layout, Loader } from '@/components/ui';

import MovieBackground from './MovieBackground';
import MovieHeader from './MovieHeader';
import MovieContent from './movie-content/MovieContent';
import { useMovie } from './useMovie';

const Movie = () => {
	const { movie, isLoading } = useMovie();

	if (isLoading) return <Loader />;
	if (!movie) return null;

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieContent movie={movie} />
		</Layout>
	);
};

export default Movie;
