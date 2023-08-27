import { supabase } from '@/supabase/supabase'

export interface Room {
	room_number: string
	price: number
	capacity: string
	rating: number
	discount: number
	description: string
	image: any
	id: number
}

export async function getRooms(): Promise<Room[]> {
	const { data, error } = await supabase.from('rooms').select('*')

	if (error) {
		throw new Error(error.message)
	}
	return data
}

export async function deleteRoom(id: number, imageName: string) {
	const { error } = await supabase.from('rooms').delete().eq('id', id)

	const { error: uploadError } = await supabase.storage
		.from('hotelat-images')
		.remove([imageName])

	if (error) {
		throw new Error(error.message)
	}
	if (uploadError) {
		throw new Error(uploadError.message)
	}
}

export async function createRoom(newRoom: Room): Promise<any> {
	const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll('/', '')

	const imagePath = `${
		import.meta.env.VITE_SUPABASE_URL
	}/storage/v1/object/public/hotelat-images/${imageName}`

	const { error } = await supabase
		.from('rooms')
		.insert([{ ...newRoom, image: imagePath }])
		.select()

	const { error: uploadError } = await supabase.storage
		.from('hotelat-images')
		.upload(imageName, newRoom.image)

	if (error) {
		throw new Error(error.message)
	}
	if (uploadError) {
		throw new Error(uploadError.message)
	}
}
