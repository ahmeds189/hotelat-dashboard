import { queryKeys } from '@/lib/constnts'
import { useQuery } from '@tanstack/react-query'
import { Room } from '@/lib/types'
import { supabase } from '@/supabase'

async function getRooms(): Promise<Room[]> {
	const { data, error } = await supabase.from('rooms').select('*')

	if (error) throw new Error(error.message)

	return data
}

export function useRooms() {
	const { data: rooms } = useQuery({
		queryKey: [queryKeys.rooms],
		queryFn: getRooms,
	})

	return { rooms }
}
