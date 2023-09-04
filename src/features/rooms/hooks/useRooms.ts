import { keys } from '@/react-query/keys'
import { useQuery } from '@tanstack/react-query'
import { Room } from '@/lib/types'
import { supabase } from '@/supabase/supabase'

async function getRooms(): Promise<Room[]> {
	const { data, error } = await supabase.from('rooms').select('*')

	if (error) {
		throw new Error(error.message)
	}
	return data
}

export function useRooms() {
	const { data: rooms, isFetching } = useQuery({
		queryKey: [keys.rooms],
		queryFn: getRooms,
	})

	return { rooms, isFetching }
}
