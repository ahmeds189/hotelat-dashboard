import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Loader, Trash2 } from 'lucide-react'
import { useDeleteRoom } from './hooks/useDeleteRoom'
import { FetchedRoom } from '@/lib/types'

interface Props {
	room: FetchedRoom
}

export const DeleteRoom = ({ room }: Props) => {
	const { image, id } = room
	const imageName = image.split('hotelat-images/')[1]
	const { mutate, isLoading } = useDeleteRoom(id, imageName)

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive' className='gap-4 justify-start'>
					<Trash2 />
					Delete
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently remove this room
						from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<Button
						variant='destructive'
						onClick={() => mutate()}
						disabled={isLoading}
						className={`${isLoading ? 'flex items-center gap-3' : null}`}
					>
						{isLoading && <Loader className='animate-spin' />}
						Continue
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
