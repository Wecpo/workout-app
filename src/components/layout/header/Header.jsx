import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import { FiArrowLeft, FiUser } from 'react-icons/fi'
import Hamburger from './hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink || '/')
					}}
				>
					<FiArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<FiUser />
				</button>
			)}
			{/*User profile */}
			<Hamburger />
		</header>
	)
}

export default Header
;<div>Header</div>
