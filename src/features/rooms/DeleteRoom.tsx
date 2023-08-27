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
import { keys } from '@/react-query/keys'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'
import { deleteRoom } from './api'

export const DeleteRoom = ({
	roomID,
	imageName,
}: {
	roomID: number
	imageName: string
}) => {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation({
		mutationFn: (): any => deleteRoom(roomID, imageName),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully deleted')
		},
	})

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive' className='gap-3'>
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
						className={`${isLoading ? 'flex items-center gap-3' : ''}`}
					>
						{isLoading && <Loader className='animate-spin' />}
						Continue
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
