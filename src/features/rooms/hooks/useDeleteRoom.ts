import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteRoom } from '../api'
import { toast } from 'react-toastify'
import { keys } from '@/react-query/keys'

export function useDeleteRoom(roomID: number, imageName: string) {
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
