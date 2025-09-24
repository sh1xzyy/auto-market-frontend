'use client'

import Link from 'next/link'
import { PiWarningCircleLight } from 'react-icons/pi'
import IconButton from '../common/IconButton/IconButton'

const CarFinancing = ({ rentPrice }) => {
	return (
		<div className='mb-3md'>
			<div className='flex items-center gap-sm mb-3md'>
				<span className='text-md'>ab {rentPrice} € mtl.</span>
				<IconButton
					className='p-sm'
					icon={PiWarningCircleLight}
					size={16}
					onClick={() => console.log('some drop down menu')}
					ariaLabel='fair drop down button'
				/>
			</div>
			<Link className='text-md text-light-orange underline p-sm pl-0' href=''>
				Finanzierung berechnen
			</Link>
		</div>
	)
}

export default CarFinancing
