import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { keys } from '@/react-query/keys'
import { createRoom } from './api'
import { useState } from 'react'
import { useTheme } from '@/context/Theme'
import { Loader } from 'lucide-react'
import {
	Output,
	coerce,
	maxLength,
	maxValue,
	minLength,
	minValue,
	number,
	object,
	string,
} from 'valibot'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'

type schemeData = Output<typeof Roomscheme>

const Roomscheme = object({
	room_number: string([
		minLength(3, 'number should follow this pattern => 001, 002...'),
		maxLength(3, 'number should follow this pattern => 001, 002...'),
		minValue('001', 'number should follow this pattern => 001, 002...'),
	]),

	price: coerce(
		number([
			minValue(100, 'price must be above 100.'),
			maxValue(1000, 'price must be below 1000.'),
		]),
		Number
	),
	capacity: string([
		minValue('1 adult', 'please follow this pattern => 2 adults 1 kid.'),
	]),
	rating: coerce(
		number([
			minValue(1, 'rating must be between 1 to 5.'),
			maxValue(5, 'rating must be between 1 to 5.'),
		]),
		Number
	),
	discount: coerce(
		number([
			minValue(0, 'enter discount from 0 up to 90.'),
			maxValue(90, 'enter discount from 0 up to 90.'),
		]),
		Number
	),
	description: string([minLength(10, 'at least enter 1 sentence long.')]),
	image: string('please upload a photo'),
})

export const RoomForm = () => {
	const queryClient = useQueryClient()
	const { setDialogDisplay } = useTheme()
	const [file, setfile] = useState<any>([])

	const form = useForm<schemeData>({
		resolver: valibotResolver(Roomscheme),
		defaultValues: {
			room_number: '',
			price: 0,
			capacity: '',
			rating: 0,
			discount: 0,
			description: '',
			image: file,
		},
	})

	const { mutate, isLoading } = useMutation({
		mutationFn: createRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [keys.rooms] })
			toast.success('successfully created')
			form.reset()
			setDialogDisplay(false)
		},
	})

	const onSubmit = (values: schemeData) => {
		mutate({ ...values, image: file, id: Math.round(Math.random()) })
	}

	const handleFileSelected = (e: any) => {
		if (!e.target.files || !e) return
		setfile(e.target.files[0])
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex gap-3'>
					<FormField
						control={form.control}
						name='room_number'
						render={({ field }) => (
							<FormItem className='basis-1/2'>
								<FormLabel>Room Number</FormLabel>
								<FormControl>
									<Input placeholder='eg => 001, 002...' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Room Price</FormLabel>
								<FormControl>
									<Input placeholder='0' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='flex gap-3'>
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
					name='capacity'
					render={({ field }) => (
						<FormItem className='basis-1/2'>
							<FormLabel>Capacity</FormLabel>
							<FormControl>
								<Input placeholder='eg => 2 adults 1 kid' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
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
				<FormField
					control={form.control}
					name='image'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input
									{...field}
									type='file'
									accept='image/*'
									value={field.value}
									onChange={(e) => {
										field.onChange(e)
										handleFileSelected(e)
									}}
									className='file:text-foreground cursor-pointer'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					disabled={isLoading}
					className={`${isLoading ? 'flex items-center gap-3' : ''}`}
				>
					{isLoading && <Loader className='animate-spin' />}
					Submit
				</Button>
			</form>
		</Form>
	)
}
