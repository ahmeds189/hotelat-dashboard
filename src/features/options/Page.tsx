import { OptionsForm } from './OptionsForm'

const Page = () => {
	return (
		<div>
			<h1 className='font-semibold text-3xl text-center sm:text-left'>
				Bookings Options
			</h1>
			<div className='mt-8 p-4 md:p-6 rounded-lg'>
				<OptionsForm />
			</div>
		</div>
	)
}

export default Page
