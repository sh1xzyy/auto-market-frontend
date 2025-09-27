'use client'

import IconButton from '../common/IconButton/IconButton'
import { PiWarningCircleLight } from 'react-icons/pi'
import FairPriceBar from '../common/FairPriceBar/FairPriceBar'

const CarPriceInfo = ({ grossPrice, fairPrice, netPrice }) => {
	return (
		<div className='mb-lg'>
			<div className='flex items-center gap-lg'>
				<span className='text-xl font-black'>{grossPrice} €</span>
				<div className='flex gap-md'>
					<FairPriceBar fairPrice={fairPrice} className='w-[17px] h-[8px]' />
					<IconButton
						icon={PiWarningCircleLight}
						size={16}
						onClick={() => console.log('some drop down menu')}
						ariaLabel='fair drop down button'
					/>
				</div>
			</div>
			<span className='text-sm text-dark-grey'>
				{netPrice} € (Netto), 19% MwSt.
			</span>
		</div>
	)
}

export default CarPriceInfo
