import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<>
			<Layout bgImage='/images/home-bg.jpg'>
				<Button
					clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
				>
					{isAuth ? 'New' : 'Sign in'}
				</Button>
				<h1 className={styles.heading}>STATE OF THE DAY</h1>
			</Layout>
		</>
	)
}

export default Home
