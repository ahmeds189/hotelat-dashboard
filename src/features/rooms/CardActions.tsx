import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import { DeleteRoom } from './DeleteRoom'
import { EditRoom } from './EditRoom'

interface Props {
	roomID: number | undefined
	imageName: string
}

export const CardActions = ({ roomID, imageName }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<MoreVertical />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='flex flex-col'>
				<DeleteRoom roomID={roomID} imageName={imageName} />
				<EditRoom />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
