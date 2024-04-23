import React, { FC } from 'react';

import { Layout, Loader, MovieCatalog, NotFound } from '@/components/ui';

import { useGenre } from './useGenre';

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre();

	if (isLoading) return <Loader />;

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	);
};

export default Genre;
