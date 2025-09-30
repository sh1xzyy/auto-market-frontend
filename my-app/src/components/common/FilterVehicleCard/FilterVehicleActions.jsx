'use client'

import { FiPhone } from 'react-icons/fi'
import { RiParkingBoxLine } from 'react-icons/ri'
import { IoMailOutline } from 'react-icons/io5'
import Link from 'next/link'

const FilterVehicleActions = ({ item, isDesktop }) => {
	return (
		<div className='flex justify-end gap-3md font-bold text-md'>
			{!isDesktop < 1014 ? (
				<a
					className='flex items-center justify-center gap-3md rounded-md bg-light-violet px-2md py-3md h-[36px] transition-colors linear duration-300 hover:bg-dark-violet'
					href={`tel:${item?.phone}`}
				>
					<FiPhone size={16} />
					<span>Kontakt</span>
				</a>
			) : (
				<Link
					className='flex items-center justify-center gap-3md rounded-md bg-light-violet px-2md py-3md h-[36px] transition-colors linear duration-300 hover:bg-dark-violet'
					href='/'
				>
					<IoMailOutline size={16} />
					<span>Kontakt</span>
				</Link>
			)}
			<button
				className='flex items-center justify-center gap-3md border border-super-light-violet px-2md py-3md h-[36px] rounded-md text-super-light-violet transition-colors linear duration-300 hover:border-light-violet'
				type='button'
				onClick={() => console.log('car saved to favorites')}
			>
				<RiParkingBoxLine size={16} />
				<span>Parken</span>
			</button>
		</div>
	)
}

export default FilterVehicleActions
