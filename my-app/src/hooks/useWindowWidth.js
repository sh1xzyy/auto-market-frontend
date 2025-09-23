'use client'

import { useState, useEffect } from 'react'

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		handleResize()

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return { windowWidth }
}

export default useWindowWidth
