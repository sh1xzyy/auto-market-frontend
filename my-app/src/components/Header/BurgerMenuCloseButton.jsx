'use client'

import { IoMdClose } from 'react-icons/io'

const BurgerMenuCloseButton = ({ setIsBurgerMenuOpen }) => {
	return (
		<button
			className='flex items-center justify-between px-2lg py-xl'
			type='button'
			onClick={() => setIsBurgerMenuOpen(false)}
		>
			<span className='font-bold'>Menü schließen</span>
			<IoMdClose
				className='fill-light-grey transition-colors duration-300 group-hover:fill-light-white'
				size={20}
			/>
		</button>
	)
}

export default BurgerMenuCloseButton
