import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useRooms } from './hooks/useRooms'
import { RoomForm } from './RoomForm'
import { RoomsGrid } from './RoomsGrid'
import { useTheme } from '@/context/Theme'
import { PlusCircle } from 'lucide-react'

const Page = () => {
	const { dialogDisplay, setDialogDisplay } = useTheme()
	const { rooms = [] } = useRooms()

	return (
		<>
			<div className='flex flex-col items-center gap-3 mb-8 xs:flex-row xs:justify-between'>
				<h1 className='font-semibold text-3xl'>All Rooms</h1>
				<Dialog open={dialogDisplay} onOpenChange={setDialogDisplay}>
					<DialogTrigger asChild>
						<Button className='py-4 text-lg gap-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-500'>
							<PlusCircle size={22} />
							<span>Add new</span>
						</Button>
					</DialogTrigger>
					<DialogContent className='rounded-md'>
						<RoomForm />
					</DialogContent>
				</Dialog>
			</div>
			<RoomsGrid rooms={rooms} />
		</>
	)
}

export default Page
