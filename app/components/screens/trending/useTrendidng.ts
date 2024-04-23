import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/services/movie.service';

export const useTrending = () => {
	const { data: movies, isFetching: isLoading } = useQuery({
		queryKey: ['get trending movies'],
		queryFn: () => MovieService.getMostPopularMovies()
	});

	return { movies, isLoading };
};
