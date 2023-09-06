import { useRooms } from './hooks/useRooms'
import { RoomsGrid } from './RoomsGrid'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { RoomForm } from './RoomForm'

const Page = () => {
	const { rooms = [] } = useRooms()

	return (
		<>
			<div className='flex flex-col items-center gap-3 mb-8 xs:flex-row xs:justify-between'>
				<h1 className='font-semibold text-3xl'>All Rooms</h1>
				<RoomForm>
					<Button className='py-4 text-lg gap-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-500'>
						<PlusCircle size={22} />
						<span>Add new</span>
					</Button>
				</RoomForm>
			</div>
			<RoomsGrid rooms={rooms} />
		</>
	)
}

export default Page
