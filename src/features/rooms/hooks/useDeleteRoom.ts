import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { keys } from '@/react-query/keys'
import { supabase } from '@/supabase/supabase'

async function deleteRoom(
	roomID: number | undefined,
	imageName: string
): Promise<void> {
	const { error } = await supabase.from('rooms').delete().eq('id', roomID)
	const { error: storageError } = await supabase.storage
		.from('hotelat-images')
		.remove([imageName])
	if (error) {
		throw new Error(error.message)
	}
	if (storageError) {
		throw new Error(storageError.message)
	}
}

export function useDeleteRoom(roomID: number | undefined, imageName: string) {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation({
		mutationFn: () => deleteRoom(roomID, imageName),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully deleted')
		},
	})

	return { mutate, isLoading }
}
