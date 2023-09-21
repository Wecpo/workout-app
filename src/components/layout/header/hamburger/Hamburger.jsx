import styles from './Hamburger.module.scss'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
import Menu from './Menu'
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside'

const Hamburger = () => {
	const [ref, isShow, setIsShow] = useOnClickOutside()

	return (
		<div className={styles.wrapper} ref={ref}>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				{isShow ? <RiCloseLine /> : <RiMenu4Line />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
