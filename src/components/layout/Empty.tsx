export const Empty = () => {
	return (
		<div className='flex flex-col items-center gap-4 mx-auto w-fit mt-48'>
			<img
				src='/empty.webp'
				alt='illustration of empty box'
				className='w-40 opacity-80 drop-shadow-2xl'
			/>
			<p className='text-lg text-muted-foreground'>
				Looks like there is no data!
			</p>
		</div>
	)
}
