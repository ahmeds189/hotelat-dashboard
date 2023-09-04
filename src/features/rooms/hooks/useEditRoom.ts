import { supabase, supabaseUrl } from '@/supabase/supabase'
import { Room } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useTheme } from '@/context/Theme'
import { keys } from '@/react-query/keys'

async function editRoom(room: Room): Promise<void> {
	// const imageName = `${Math.floor(Math.random() * 101)}-${room.image.name}`
	// const imagePath = `${supabaseUrl}/storage/v1/object/public/hotelat-images/${imageName}`

	const { data, error } = await supabase
		.from('rooms')
		.update({})
		.eq('id', room.id)

	if (error) {
		throw new Error(error.message)
	}
}

export function useEditRoom() {
	const queryClient = useQueryClient()
	const { setDialogDisplay } = useTheme()

	const { mutate: edit, isLoading: isEditing } = useMutation({
		mutationFn: editRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully Edited')
			setDialogDisplay(false)
		},
	})

	return { edit, isEditing }
}
