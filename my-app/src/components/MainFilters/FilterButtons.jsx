import Link from 'next/link'

const FilterButtons = ({ item: { actionButton, navigationButton } }) => {
	return (
		<>
			<button className='flex items-center justify-center gap-2sm w-full h-[36px] text-light-white transition-colors linear duration-300 hover:text-light-grey'>
				{actionButton?.icon}
				<span className='font-bold text-md'>{actionButton?.label}</span>
			</button>
			<Link
				href={navigationButton?.href}
				className='flex items-center justify-center gap-2sm w-full h-[36px] text-light-white transition-colors linear duration-300 hover:text-light-grey'
			>
				{navigationButton?.icon}
				<span className='font-bold text-md'>{navigationButton?.label}</span>
			</Link>
		</>
	)
}

export default FilterButtons
