import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { keys } from '@/react-query/keys'
import { supabase } from '@/supabase/supabase'

async function deleteRoom(id: number): Promise<void> {
	const { error } = await supabase.from('rooms').delete().eq('id', id)
	if (error) throw new Error(error.message)
}

export function useDeleteRoom() {
	const queryClient = useQueryClient()
	const { mutate, isLoading } = useMutation({
		mutationFn: deleteRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully deleted')
		},
	})

	return { mutate, isLoading }
}
