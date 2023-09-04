import * as Form from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader } from 'lucide-react'
import { useCreateRoom } from './hooks/useCreateRoom'

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
	image: z.instanceof(File, { message: 'please upload an image' }),
})

export const RoomForm = () => {
	const { create, isCreating } = useCreateRoom()
	const isLoading = isCreating

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
		create({ ...values, id: Math.floor(Math.random() * 1001) })
	}

	return (
		<Form.Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex flex-col gap-3 sm:flex-row'>
					<Form.FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<Form.FormItem className='basis-1/2'>
								<Form.FormLabel>Room Price</Form.FormLabel>
								<Form.FormControl>
									<Input placeholder='0' {...field} />
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
					<Form.FormField
						control={form.control}
						name='capacity'
						render={({ field }) => (
							<Form.FormItem className='basis-1/2'>
								<Form.FormLabel>Capacity</Form.FormLabel>
								<Form.FormControl>
									<Input placeholder='0' {...field} />
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
				</div>
				<div className='flex flex-col gap-3 sm:flex-row'>
					<Form.FormField
						control={form.control}
						name='discount'
						render={({ field }) => (
							<Form.FormItem className='basis-1/2'>
								<Form.FormLabel>Discount</Form.FormLabel>
								<Form.FormControl>
									<Input placeholder='0' {...field} />
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
					<Form.FormField
						control={form.control}
						name='rating'
						render={({ field }) => (
							<Form.FormItem className='basis-1/2'>
								<Form.FormLabel>Rating</Form.FormLabel>
								<Form.FormControl>
									<Input placeholder='1' {...field} />
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
				</div>

				<Form.FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<Form.FormItem>
							<Form.FormLabel>Description</Form.FormLabel>
							<Form.FormControl>
								<Textarea
									placeholder='descripe room features and details..'
									className='resize-none'
									{...field}
								/>
							</Form.FormControl>
							<Form.FormMessage />
						</Form.FormItem>
					)}
				/>
				<Form.FormField
					control={form.control}
					name='image'
					render={({ field: { onChange } }) => (
						<Form.FormItem>
							<Form.FormLabel>Image</Form.FormLabel>
							<Form.FormControl>
								<Input
									accept='.jpg, .jpeg, .png'
									type='file'
									onChange={(e) =>
										onChange(e.target.files ? e.target.files[0] : null)
									}
									className='file:text-foreground cursor-pointer'
								/>
							</Form.FormControl>
							<Form.FormMessage />
						</Form.FormItem>
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
		</Form.Form>
	)
}
