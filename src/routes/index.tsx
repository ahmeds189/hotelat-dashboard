import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { Dashboard } from '@/routes/Dashboard'
import { Bookings } from '@/routes/Bookings'
import { Rooms } from '@/routes/Rooms'
import { Staff } from '@/routes/Staff'
import { Settings } from '@/routes/Settings'
import { Account } from '@/routes/Account'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { Loading } from '@/components/layout/Loading'

export const Layout = () => {
	return (
		<div className='grid grid-rows-[4.2rem_1fr] items-start md:grid-cols-[15rem_1fr] relative'>
			<div className='absolute z-10 top-3 left-1/2 -translate-x-1/2'>
				<Loading />
			</div>

			<Sidebar className='sticky top-0 hidden border-r md:block h-screen animate-in slide-in-from-left' />

			<header className='sticky top-0 flex h-full items-center space-x-5 border-b border-border px-4 md:col-start-2 md:row-start-1 md:px-8 2xl:container z-[6] bg-background'>
				<Header />
			</header>

			<main className='min-h-[calc(100dvh-4.2rem)] relative p-4 md:p-6 md:col-start-2 2xl:container'>
				<Outlet />
			</main>
		</div>
	)
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Navigate to='dashboard' replace />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'bookings',
				element: <Bookings />,
			},
			{
				path: 'rooms',
				element: <Rooms />,
			},
			{
				path: 'staff',
				element: <Staff />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
			{
				path: 'account',
				element: <Account />,
			},
		],
	},
])
