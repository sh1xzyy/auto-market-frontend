import clsx from 'clsx'
import { carTechnicalDetails } from './carTechnicalDetails.data'
import { useState } from 'react'

const CarTechnicalDetails = ({ data }) => {
	const [isListOpen, setIsListOpen] = useState(false)
	return (
		<div
			className={clsx(
				'p-lg pb-0 h-full bg-background-light-black lg:rounded-lg'
			)}
		>
			<h3 className='text-xl font-bold mb-lg'>Technische Daten</h3>

			<ul className={clsx('overflow-y-hidden', !isListOpen && 'max-h-[216px]')}>
				{data?.technicalDetails.map(({ key, value }) => (
					<li
						className='grid grid-cols-2 font-bold text-md even:bg-black'
						key={key}
					>
						<span className='p-md'>{carTechnicalDetails[key]?.label}</span>
						<span className='p-md'>{value}</span>
					</li>
				))}
			</ul>
			<button
				className='py-lg text-md text-light-orange underline w-full m-auto transition-colors linear duration-300 hover:text-dark-orange'
				type='button'
				onClick={() => setIsListOpen(!isListOpen)}
			>
				{isListOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}
			</button>
		</div>
	)
}

export default CarTechnicalDetails
