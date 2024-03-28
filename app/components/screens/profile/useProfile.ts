import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { IAuthFormData } from '@/shared/types/auth.interface';

import { UserService } from '@/services/user.service';

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { isFetching, data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile()
	});

	useEffect(() => {
		if (data?.email) {
			setValue('email', data?.email);
		}
	}, [data]);

	const { mutateAsync } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: IAuthFormData) => UserService.updateProfile(data),
		onSuccess() {
			Toast.show({
				text1: 'Update profile',
				text2: 'update was successfull',
				type: 'success'
			});
		}
	});

	const onSubmit: SubmitHandler<IAuthFormData> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading: isFetching };
};
