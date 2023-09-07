import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/context/Theme'
import { ToastContainer } from 'react-toastify'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/index.css'

// react-query init
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
	queryCache: new QueryCache({
		onError: (error) => {
			if (error instanceof Error) toast.error(error.message)
		},
	}),
})

// react-router init
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Staff } from './routes/Staff'
import { Account } from './routes/Account'
import { Bookings } from './routes/Bookings'
import { Dashboard } from './routes/Dashboard'
import RoomsPage from '@/features/rooms/Page'
import OptionsPage from '@/features/options/Page'
const router = createBrowserRouter([
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
				element: <RoomsPage />,
			},
			{
				path: 'staff',
				element: <Staff />,
			},
			{
				path: 'options',
				element: <OptionsPage />,
			},
			{
				path: 'account',
				element: <Account />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<QueryClientProvider client={queryClient}>
			<ToastContainer transition={Slide} hideProgressBar />
			<ReactQueryDevtools
				position='bottom-left'
				toggleButtonProps={{ className: 'scale-[0.7]' }}
			/>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</ThemeProvider>
)
