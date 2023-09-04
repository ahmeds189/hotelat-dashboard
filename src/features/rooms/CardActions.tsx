import { Button } from '@/components/ui/button'
import { Edit, Files } from 'lucide-react'
import { DeleteRoom } from './DeleteRoom'

export const CardActions = () => {
	return (
		<div className='flex space-x-3'>
			<Button size='icon' variant='outline'>
				<Edit />
			</Button>
			<Button size='icon' variant='outline'>
				<Files />
			</Button>
			<DeleteRoom />
		</div>
	)
}
