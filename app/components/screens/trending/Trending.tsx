import React, { FC } from 'react';

import { Layout, Loader, MovieCatalog } from '@/components/ui';

import { useTrending } from './useTrendidng';

const Trending: FC = () => {
	const { isLoading, movies } = useTrending();

	if (isLoading) return <Loader />;

	return (
		<Layout isHasPadding>
			<MovieCatalog
				title='Trending'
				movies={movies}
				description='Trending movies in exceleent quakity: legal, safe, without ads'
			/>
		</Layout>
	);
};

export default Trending;
