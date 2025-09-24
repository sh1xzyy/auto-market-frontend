'use client'
const CarActionButton = ({ isListOpen, setIsListOpen }) => {
	return (
		<button
			className='py-lg text-light-orange underline w-full m-auto transition-colors linear duration-300 hover:text-dark-orange'
			type='button'
			onClick={() => setIsListOpen(prev => !prev)}
		>
			<span className='text-md'>
				{isListOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}
			</span>
		</button>
	)
}

export default CarActionButton
