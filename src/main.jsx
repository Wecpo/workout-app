import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/home/Home.jsx'
import './assets/styles/index.scss'
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import Router from './routes/Router.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</React.StrictMode>
)
