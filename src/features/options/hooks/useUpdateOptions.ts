import { queryKeys } from '@/lib/constnts'
import { Options } from '@/lib/types'
import { supabase } from '@/supabase'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export async function updateOptions(newOption: Options): Promise<any> {
	const { error } = await supabase.from('options').update(newOption).eq('id', 1)

	if (error) throw new Error(error.message)
}

export function useUpdateOptions() {
	const queryClient = useQueryClient()

	const { mutate: update, isLoading: isUpdateing } = useMutation({
		mutationFn: updateOptions,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [queryKeys.rooms] })
			toast.success('successfully updated')
		},
	})

	return { update, isUpdateing }
}
