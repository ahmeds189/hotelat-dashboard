import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CardActions } from './CardActions'
import { calcDicsount } from '@/lib/utils'
import { FetchedRoom } from '@/lib/types'
import { Bed } from 'lucide-react'

interface Props {
	room: FetchedRoom
}

export const RoomCard = ({ room }: Props) => {
	const { description, price, capacity, rating, discount, image } = room
	const newPrice = calcDicsount(price, discount)

	return (
		<Card>
			<CardHeader className='mb-auto relative'>
				<div className='bg-[url(/placeholder.svg)] overflow-hidden rounded-md object-cover bg-center aspect-video w-full'>
					<img src={image} alt={description} className='w-full aspect-video' />
				</div>
				<CardDescription>{description}</CardDescription>
				<Badge className='absolute left-5 font-normal'>
					<span className='mr-1'>⭐</span>
					{rating}/5
				</Badge>
			</CardHeader>
			<CardContent>
				{discount && (
					<Badge
						variant='outline'
						className='mb-1 text-xs text-muted-foreground font-normal'
					>
						{discount}% off
					</Badge>
				)}
				<p className='mb-4 font-medium'>
					${newPrice}
					<del className='text-xs text-muted-foreground ml-1 font-normal'>
						{discount ? `$${price}` : null}
					</del>
				</p>
				<div className='flex items-center gap-3'>
					<Bed className='text-indigo-500' />
					<span className='mr-auto font-normal'>
						fits up to {capacity} person(s)
					</span>
					<CardActions room={room} />
				</div>
			</CardContent>
		</Card>
	)
}
