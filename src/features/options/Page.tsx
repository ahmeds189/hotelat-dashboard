import { useOptions } from './hooks/useOptions'

const Page = () => {
	const { options = [] } = useOptions()

	return (
		<div>
			<h1 className='font-semibold text-3xl'>Bookings Options</h1>
		</div>
	)
}

export default Page
