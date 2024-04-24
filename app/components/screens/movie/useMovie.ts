import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@/hooks/useTypedRoute';

import { MovieService } from '@/services/movie.service';

export const useMovie = () => {
	const { params } = useTypedRoute<'Movie'>();

	const { data: movie, isFetching: isLoading } = useQuery({
		queryKey: ['get movie by slug', params.slug],
		queryFn: () => MovieService.getBySlug(params.slug)
	});

	return { movie, isLoading };
};
