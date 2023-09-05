import { supabase } from '@/supabase/supabase'
import { Room } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { keys } from '@/react-query/keys'

async function createRoom(room: Room): Promise<Room[]> {
	const { data, error } = await supabase
		.from('rooms')
		.insert([room])
		.select('*')

	if (error) throw new Error(error.message)

	return data
}

export function useCreateRoom() {
	const queryClient = useQueryClient()

	const { mutate: create, isLoading: isCreating } = useMutation({
		mutationFn: createRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully created')
		},
	})

	return { create, isCreating }
}
