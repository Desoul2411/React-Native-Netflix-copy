import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/services/movie.service';

export const useRelatedMovies = (
	genreIds: string[],
	currentMovieId: string
) => {
	const { data, isFetching: isLoading } = useQuery({
		queryKey: ['get related movies by genres', genreIds],
		queryFn: () => MovieService.getByGenres(genreIds),
		select: data => data.filter(m => m._id !== currentMovieId).slice(0, 5)
	});

	return { data, isLoading };
};
