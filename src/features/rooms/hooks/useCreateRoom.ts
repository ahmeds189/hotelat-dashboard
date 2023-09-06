import { supabase } from '@/supabase'
import { Room } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { queryKeys } from '@/lib/constnts'

async function createRoom(room: Room): Promise<Room[]> {
	const { data, error } = await supabase
		.from('rooms')
		.insert([room])
		.select()
		.single()

	if (error) throw new Error(error.message)

	return data
}

export function useCreateRoom() {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation({
		mutationFn: createRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [queryKeys.rooms] })
			toast.success('successfully created')
		},
	})

	return { mutate, isLoading }
}
