import { Route } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom/dist'
import { routes } from './routes.data'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
