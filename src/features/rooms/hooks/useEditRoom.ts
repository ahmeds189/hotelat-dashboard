import { supabase } from '@/supabase/supabase'
import { Room } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useTheme } from '@/context/Theme'
import { keys } from '@/react-query/keys'

async function editRoom(newRoom: Room): Promise<Room[]> {
	const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll('/', '')

	const imagePath = `${
		import.meta.env.VITE_SUPABASE_URL
	}/storage/v1/object/public/hotelat-images/${imageName}`

	const { data, error } = await supabase
		.from('rooms')
		.insert([{ ...newRoom, image: imagePath }])
		.select()
		.single()

	const { error: uploadError } = await supabase.storage
		.from('hotelat-images')
		.upload(imageName, newRoom.image)

	if (error) {
		throw new Error(error.message)
	}
	if (uploadError) {
		throw new Error(uploadError.message)
	}
	return data
}

export function useEditRoom() {
	const queryClient = useQueryClient()
	const { setDialogDisplay } = useTheme()

	const { mutate, isLoading } = useMutation({
		mutationFn: editRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully created')
			setDialogDisplay(false)
		},
	})

	return { mutate, isLoading }
}
