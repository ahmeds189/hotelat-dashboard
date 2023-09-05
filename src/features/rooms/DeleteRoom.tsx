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
import { Loader, Trash } from 'lucide-react'
import { useDeleteRoom } from './hooks/useDeleteRoom'

interface Props {
	roomToDelete: number
}

export const DeleteRoom = ({ roomToDelete }: Props) => {
	const { mutate, isLoading } = useDeleteRoom()

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button size='icon' variant='outline'>
					<Trash />
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
						onClick={() => mutate(roomToDelete)}
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
