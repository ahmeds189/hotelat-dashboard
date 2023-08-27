import { Loading } from '@/components/layout/Loading'
import { NewRoom } from '@/features/rooms/NewRoom'
import { RoomsGrid } from '@/features/rooms/RoomsGrid'

export const Rooms = () => {
	return (
		<>
			<Loading />
			<div className='flex flex-col items-center gap-3 mb-8 xs:flex-row xs:justify-between'>
				<h1 className='font-bold text-3xl'>All Rooms</h1>
				<NewRoom />
			</div>
			<RoomsGrid />
		</>
	)
}
