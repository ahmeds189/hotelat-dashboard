import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { RoomsGrid } from './RoomsGrid'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { RoomForm } from './RoomForm'
import { useTheme } from '@/context/Theme'

const Page = () => {
	const { dialogDisplay, setDialogDisplay } = useTheme()

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
			<RoomsGrid />
		</>
	)
}

export default Page
