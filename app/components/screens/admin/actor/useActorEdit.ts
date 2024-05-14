import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { useTypedRoute } from '@/hooks/useTypedRoute';

import { IActorEditInput } from '@/shared/types/actor.interface';

import { ActorService } from '@/services/actor.service';

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { params } = useTypedRoute<'ActorEdit'>();
	const actorId = params.id;

	const { isLoading, data } = useQuery({
		queryKey: ['get actor', actorId],
		queryFn: () => ActorService.getById(actorId),
		enabled: !!actorId
	});

	useEffect(() => {
		console.log('data useGenreEdit', data);
		if (data) {
			Object.entries<any>(data).forEach(([key, value]) => {
				setValue(key as keyof IActorEditInput, value);
			});
		}
	}, [data]);

	const queryClient = useQueryClient();

	const { mutateAsync } = useMutation({
		mutationKey: ['update actor'],
		mutationFn: (data: IActorEditInput) => ActorService.update(actorId, data),

		async onSuccess() {
			Toast.show({
				type: 'success',
				text1: 'Update actor',
				text2: 'update was successful'
			});

			await queryClient.invalidateQueries({ queryKey: ['search actors'] });
		}
	});

	const onSubmit: SubmitHandler<IActorEditInput> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
