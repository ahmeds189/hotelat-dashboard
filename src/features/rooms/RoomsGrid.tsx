import { Empty } from '@/components/layout/Empty'
import { RoomCard } from './RoomCard'
import { useRooms } from './hooks/useRooms'
import { Room } from '@/lib/types'

interface Props {
	rooms: Room[]
}

export const RoomsGrid = ({ rooms }: Props) => {
	const { isFetching } = useRooms()

	if (!rooms?.length && !isFetching) return <Empty />
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
			{rooms.map((room) => (
				<RoomCard room={room} key={room.id} />
			))}
		</div>
	)
}
