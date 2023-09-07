import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { useOptions } from './hooks/useOptions'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import { useUpdateOptions } from './hooks/useUpdateOptions'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { useEffect } from 'react'
import { useIsFetching } from '@tanstack/react-query'

const formSchema = z.object({
	breakfast_price: z.coerce
		.number()
		.min(5, { message: 'must be greater than or equal to 5' })
		.max(100, { message: 'must be less than or equal to 100' }),
	min_days: z.coerce
		.number()
		.min(10, { message: 'must be greater than or equal to 10' })
		.max(50, { message: 'must be less than or equal to 50' }),
	max_days: z.coerce
		.number()
		.min(0, { message: 'must be greater than or equal to 1 night' })
		.max(30, { message: 'must be less than or equal to 50' }),
	max_guests_per_booking: z.coerce
		.number()
		.min(1, { message: 'at least 1 person per booking' })
		.max(6, { message: 'maximum capacity is 6 persons per booking' }),
})

export const OptionsForm = () => {
	const { options } = useOptions()
	const isFetching = useIsFetching()
	const { update, isUpdateing } = useUpdateOptions()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			breakfast_price: 0,
			min_days: 0,
			max_days: 0,
			max_guests_per_booking: 0,
		},
	})

	const isFormEdited = form.formState.isDirty

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (!isFormEdited) {
			return
		} else {
			update({ ...values, id: 1 })
		}
	}

	useEffect(() => {
		if (options) {
			form.reset({
				breakfast_price: options?.breakfast_price,
				min_days: options?.min_days,
				max_days: options?.max_days,
				max_guests_per_booking: options?.max_guests_per_booking,
			})
		}
	}, [options])

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-6 max-w-md mx-auto'
			>
				<FormField
					control={form.control}
					name='breakfast_price'
					render={({ field }) => (
						<FormItem className='basis-1/2'>
							<FormLabel className='font-semibold'>Breakfast Price</FormLabel>
							<FormControl>
								<Input
									disabled={isUpdateing || isFetching === 1}
									placeholder='0'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='min_days'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold'>Minmum Days</FormLabel>
							<FormControl>
								<Input
									disabled={isUpdateing || isFetching === 1}
									placeholder='0'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='max_days'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold'>Maximum Days</FormLabel>
							<FormControl>
								<Input
									disabled={isUpdateing || isFetching === 1}
									placeholder='0'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='max_guests_per_booking'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold'>
								Maximum Guests (per booking)
							</FormLabel>
							<FormControl>
								<Input
									disabled={isUpdateing || isFetching === 1}
									placeholder='0'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					variant='secondary'
					disabled={
						isUpdateing ||
						isFetching === 1 ||
						!isFormEdited ||
						form.formState.isSubmitSuccessful
					}
				>
					<Save />
					<span className='font-semibold text-lg ml-2'>Save</span>
				</Button>
			</form>
		</Form>
	)
}
