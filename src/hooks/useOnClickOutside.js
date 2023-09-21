import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = () => {
	const [isShow, setIsShow] = useState(false)
	const ref = useRef()

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return [ref, isShow, setIsShow]
}
