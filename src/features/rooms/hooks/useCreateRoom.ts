import { supabase } from '@/supabase'
import { Room } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { queryKeys } from '@/lib/constnts'
import { useTheme } from '@/context/Theme'

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
	const { setDialogDisplay } = useTheme()

	const { mutate: create, isLoading: isCreating } = useMutation({
		mutationFn: createRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [queryKeys.rooms] })
			toast.success('successfully created')
			setDialogDisplay(false)
		},
	})

	return { create, isCreating }
}
