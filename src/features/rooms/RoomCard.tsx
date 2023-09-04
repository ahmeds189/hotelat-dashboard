import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CardActions } from './CardActions'
import { calcDicsount } from '@/lib/utils'
import { Room } from '@/lib/types'
import { Bed, Star } from 'lucide-react'

interface Props {
	room: Room
}

export const RoomCard = ({ room }: Props) => {
	const { description, price, capacity, rating, discount, image } = room
	const newPrice = calcDicsount(price, discount)

	return (
		<Card>
			<CardHeader className='mb-auto'>
				<div className='bg-[url(/placeholder.svg)] overflow-hidden rounded-md object-cover bg-center aspect-video w-full'>
					<img src={image} alt={description} className='w-full aspect-video' />
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				{discount ? (
					<Badge
						variant='outline'
						className='mb-1 text-xs text-muted-foreground font-normal'
					>
						{discount}% off
					</Badge>
				) : null}
				<p className='mb-4 font-semibold'>
					${newPrice}
					<del className='text-xs text-muted-foreground ml-1 font-normal'>
						{discount ? `$${price}` : null}
					</del>
				</p>
				<div>
					<div className='flex items-center gap-3 mb-5'>
						<Bed className='text-indigo-500' />
						<p className='mr-auto font-normal text-sm'>
							fits up to {capacity} person(s)
						</p>
					</div>
					<div className='flex items-center gap-3 mb-5'>
						<Star className='text-orange-400' />
						<p className='mr-auto font-normal text-sm'>{rating} / 5</p>
					</div>
					<CardActions />
				</div>
			</CardContent>
		</Card>
	)
}
