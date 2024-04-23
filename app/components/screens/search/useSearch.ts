import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/services/movie.service';

import { useSearchForm } from './useSerachForm';

export const useSearch = () => {
	const { searchTerm, debounceSearch, control } = useSearchForm();

	const { data: movies, isFetching: isLoading } = useQuery({
		queryKey: ['search movies', debounceSearch],
		queryFn: () => MovieService.getAll(debounceSearch),
		enabled: !!debounceSearch
	});

	return { movies, isLoading, control, searchTerm };
};
