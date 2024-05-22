import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { useTypedRoute } from '@/hooks/useTypedRoute';

import { IMovieEditInput } from '@/shared/types/movie.interface';

import { MovieService } from '@/services/movie.service';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { params } = useTypedRoute<'MovieEdit'>();
	const movieId = params.id;

	const { isLoading, data } = useQuery({
		queryKey: ['get movie', movieId],
		queryFn: () => MovieService.getById(movieId),
		enabled: !!movieId
	});

	useEffect(() => {
		if (data) {
			Object.entries<string>(data as any).forEach(([key, value]) => {
				setValue(key as keyof IMovieEditInput, value);
			});
		}
	}, [data]);

	const queryClient = useQueryClient();

	const { mutateAsync } = useMutation({
		mutationKey: ['update movie'],
		mutationFn: (data: IMovieEditInput) => MovieService.update(movieId, data),

		async onSuccess() {
			Toast.show({
				type: 'success',
				text1: 'Update movie',
				text2: 'update was successful'
			});

			await queryClient.invalidateQueries({
				queryKey: ['get movies']
			});
		}
	});

	const onSubmit: SubmitHandler<IMovieEditInput> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
