import {
	Form,
	FormControl,
	FormField,
	FormMessage,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader } from 'lucide-react'
import { useCreateRoom } from './hooks/useCreateRoom'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ReactNode, useState } from 'react'
import { Room } from '@/lib/types'

const Roomscheme = z.object({
	price: z.coerce
		.number()
		.min(200, { message: 'must be greater than or equal to 200' })
		.max(900, { message: 'must be less than or equal to 900' }),
	discount: z.coerce.number().min(0).max(100),
	rating: z.coerce
		.number()
		.min(1, { message: 'must be greater than or equal to 1' })
		.max(5, { message: 'must be less than or equal to 5' }),
	capacity: z.coerce
		.number()
		.min(1, { message: 'must be greater than or equal to 1 person' })
		.max(10, { message: 'must be less than or equal to 10 persons' }),
	description: z
		.string()
		.min(10, { message: 'must be 10 or more characters long' }),
})

interface Props {
	children: ReactNode
	roomValues?: Room
}

export const RoomForm = ({ children }: Props) => {
	const [open, setOpen] = useState(false)
	const { mutate, isLoading } = useCreateRoom()

	const form = useForm<z.infer<typeof Roomscheme>>({
		resolver: zodResolver(Roomscheme),
		defaultValues: {
			price: 0,
			rating: 0,
			capacity: 0,
			discount: 0,
			description: '',
		},
	})

	const onSubmit = (values: z.infer<typeof Roomscheme>) => {
		mutate({
			...values,
			id: Math.floor(Math.random() * 1001),
			image: 'https://placehold.co/600x400',
		})
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<FormField
								control={form.control}
								name='price'
								render={({ field }) => (
									<FormItem className='basis-1/2'>
										<FormLabel>Room Price</FormLabel>
										<FormControl>
											<Input placeholder='0' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='capacity'
								render={({ field }) => (
									<FormItem className='basis-1/2'>
										<FormLabel>Capacity</FormLabel>
										<FormControl>
											<Input placeholder='0' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<FormField
								control={form.control}
								name='discount'
								render={({ field }) => (
									<FormItem className='basis-1/2'>
										<FormLabel>Discount</FormLabel>
										<FormControl>
											<Input placeholder='0' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='rating'
								render={({ field }) => (
									<FormItem className='basis-1/2'>
										<FormLabel>Rating</FormLabel>
										<FormControl>
											<Input placeholder='1' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder='descripe room features and details..'
											className='resize-none'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type='submit'
							disabled={isLoading}
							className={`${isLoading ? 'flex items-center gap-3' : null}`}
						>
							{isLoading && <Loader className='animate-spin' />}
							Submit
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
