import clsx from 'clsx'
import { carTechnicalDetails } from './carTechnicalDetails.data'

const CarList = ({ data, isListOpen }) => {
	return (
		<ul className={clsx('overflow-y-hidden', !isListOpen && 'max-h-[216px]')}>
			{data?.technicalDetails.map(({ key, value }) => (
				<li
					className='grid grid-cols-2 font-bold h-[36px] text-md p-md even:bg-black'
					key={key}
				>
					<span>{carTechnicalDetails[key]?.label}</span>
					<span>{value}</span>
				</li>
			))}
		</ul>
	)
}

export default CarList
