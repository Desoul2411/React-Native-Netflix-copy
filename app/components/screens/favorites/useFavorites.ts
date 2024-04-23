import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/hooks/useAuth';

import { UserService } from '@/services/user.service';

export const useFavorites = () => {
	const { user } = useAuth();

	const { data: favoriteMovies, isFetching: isLoading } = useQuery({
		queryKey: ['favorite movies'],
		queryFn: () => UserService.getFavorites(),
		enabled: !!user,
		staleTime: Infinity
	});

	return { favoriteMovies, isLoading };
};
