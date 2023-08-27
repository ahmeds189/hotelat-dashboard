import { useQuery } from '@tanstack/react-query'
import { getRooms } from './api'
import { RoomCard } from './RoomCard'
import { keys } from '@/react-query/keys'
import { Room } from './api'
import { Empty } from '@/components/layout/Empty'

export const RoomsGrid = () => {
	const { data } = useQuery({
		queryKey: [keys.rooms],
		queryFn: getRooms,
	})

	if (!data || !data.length) return <Empty />

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
			{data?.map((room: Room) => (
				<RoomCard room={room} key={room.id} />
			))}
		</div>
	)
}
