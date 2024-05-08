import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/services/movie.service';

export const useTrending = (limit?: number) => {
	const { data: movies, isFetching: isLoading } = useQuery({
		queryKey: ['get trending movies'],
		queryFn: () => MovieService.getMostPopularMovies(),
		select: data => (limit ? data.slice(0, limit) : data)
	});

	return { movies, isLoading };
};
