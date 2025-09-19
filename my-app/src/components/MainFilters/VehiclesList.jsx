import IconButton from '../common/IconButton/IconButton'
import clsx from 'clsx'
import { vehicleList } from './vehicleList.data'

const VehiclesList = ({ openIndex, setOpenIndex }) => {
	return (
		<ul className='flex justify-center' aria-label='all vehicles'>
			{vehicleList.map(({ icon, ariaLabel }, i) => (
				<li className='border-r border-grey last:border-0 w-full' key={i}>
					<IconButton
						className={clsx(
							'flex items-center justify-center py-md w-full',
							openIndex !== i && 'bg-black hover:bg-background-light-black',
							openIndex === i && 'bg-background-light-black'
						)}
						iconClassName={clsx(openIndex === i && 'fill-light-orange')}
						icon={icon}
						size={30}
						ariaLabel={ariaLabel}
						onClick={() => setOpenIndex(i)}
					/>
				</li>
			))}
		</ul>
	)
}

export default VehiclesList
