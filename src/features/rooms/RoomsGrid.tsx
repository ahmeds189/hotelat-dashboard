import { Empty } from '@/components/layout/Empty'
import { RoomCard } from './RoomCard'
import { useRooms } from './hooks/useRooms'

export const RoomsGrid = () => {
	const { rooms, isFetching } = useRooms()

	if (!rooms?.length && !isFetching) return <Empty />

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
			{rooms?.map((room) => (
				<RoomCard room={room} key={room.id} />
			))}
		</div>
	)
}
