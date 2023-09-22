import { menu } from './menu.data'
import styles from './Hamburger.module.scss'
import cn from 'clsx'
import { Link } from 'react-router-dom'

const Menu = ({ isShow }) => {
	const logoutHandler = () => {
		console.log(`LOGOUT Button`)
	}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<Link onClick={logoutHandler}>Logout</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
