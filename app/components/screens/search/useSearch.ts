import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/services/movie.service';

import { useSearchForm } from './useSerachForm';

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm();

	const { data: movies, isFetching: isLoading } = useQuery({
		queryKey: ['get movies', debouncedSearch],
		queryFn: () => MovieService.getAll(debouncedSearch),
		enabled: !!debouncedSearch
	});

	return { movies, isLoading, control, searchTerm };
};
