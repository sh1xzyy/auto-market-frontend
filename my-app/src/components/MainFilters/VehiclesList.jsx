import IconButton from '../common/IconButton/IconButton'
import clsx from 'clsx'
import { vehicleList } from './vehicleList.data'

const VehiclesList = ({ openIndex, setOpenIndex, setIsOtherFiltersOpen }) => {
	return (
		<ul
			className='flex justify-center md:min-w-[90px] md:flex-col'
			aria-label='all vehicles'
		>
			{vehicleList.map(({ icon, ariaLabel }, i) => (
				<li
					className={clsx(
						'border-r border-b border-grey w-full md:border-b md:last:border-r md:last:border-b-0',
						openIndex === i && 'border-b-0 md:border-0 md:last:border-r-0'
					)}
					key={i}
				>
					<IconButton
						className={clsx(
							'flex items-center justify-center py-md px-md w-full',
							openIndex !== i && 'bg-black hover:bg-background-light-black',
							openIndex === i && 'bg-background-light-black',
							i === 0 && 'md:rounded-tl-2xl',
							i === vehicleList.length - 1 && 'md:rounded-bl-2xl'
						)}
						iconClassName={clsx(openIndex === i && 'fill-light-orange')}
						icon={icon}
						size={30}
						ariaLabel={ariaLabel}
						onClick={() => {
							setOpenIndex(i)
							setIsOtherFiltersOpen(false)
						}}
					/>
				</li>
			))}
		</ul>
	)
}

export default VehiclesList
