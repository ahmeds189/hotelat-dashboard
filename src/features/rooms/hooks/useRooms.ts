import { keys } from '@/react-query/keys'
import { useQuery } from '@tanstack/react-query'
import { getRooms } from '../api'

export function useRooms() {
	const { data: rooms, isFetching } = useQuery({
		queryKey: [keys.rooms],
		queryFn: getRooms,
	})

	return { rooms, isFetching }
}
