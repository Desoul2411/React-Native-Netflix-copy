import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@/hooks/useTypedRoute';

import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';

export const useGenre = () => {
	const { params } = useTypedRoute<'Genre'>();

	const { data: genre, isFetching: isLoading } = useQuery({
		queryKey: ['get genre by slug', params.slug],
		queryFn: () => GenreService.getBySlug(params.slug)
	});

	const genreId = genre?._id || '';

	const { data: movies, isFetching: isMovieLoading } = useQuery({
		queryKey: ['get movies by genre', genreId],
		queryFn: () => MovieService.getByGenres([genreId]),
		enabled: !!genreId
	});

	return { genre, movies, isLoading: isLoading || isMovieLoading };
};
