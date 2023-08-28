import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from '@/routes'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/context/Theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/react-query/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { Slide } from 'react-toastify'
import '@/index.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<ToastContainer
					position='top-center'
					hideProgressBar={false}
					closeOnClick={false}
					limit={1}
					draggable
					pauseOnHover
					draggableDirection='y'
					transition={Slide}
					theme='dark'
				/>
				<RouterProvider router={router} />
				<ReactQueryDevtools position='bottom-right' />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>
)
