'use client'

import clsx from 'clsx'
import IconButton from '../common/IconButton/IconButton'
import { PiWarningCircleLight } from 'react-icons/pi'

const fairPrice = [true, true, true, false, false]

const CarPriceInfo = ({ grossPrice, netPrice }) => {
	return (
		<div className='mb-lg'>
			<div className='flex items-center gap-lg'>
				<span className='text-xl font-black'>{grossPrice} €</span>
				<div className='flex gap-md'>
					<div>
						<div className='flex items-center gap-sm'>
							{fairPrice.map((el, i) => (
								<span
									className={clsx(
										'w-[17px] h-[8px]',
										el && 'bg-light-green',
										!el && 'bg-grey'
									)}
									key={i}
								></span>
							))}
						</div>
						<span className='text-sm text-dark-grey'>Fairer Preis</span>
					</div>
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
