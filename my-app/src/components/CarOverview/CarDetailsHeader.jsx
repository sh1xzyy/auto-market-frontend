'use client'

import IconButton from '../common/IconButton/IconButton'
import { IoShareSocial } from 'react-icons/io5'

const CarDetailsHeader = ({ name, description, windowWidth }) => {
	return (
		<div className='flex items-center justify-between mb-lg'>
			<div>
				<h2 className='mb-sm'>{name}</h2>
				<p className='line-clamp-1' title={description}>
					{description}
				</p>
			</div>
			{windowWidth < 1014 && (
				<IconButton
					icon={IoShareSocial}
					size={16}
					className='flex items-center justify-center w-[50px] h-[44px] border border-super-light-violet rounded-md hover:border-light-violet'
					iconClassName='group-hover:fill-light-violet'
					onClick={() => console.log('on share button clicked')}
				/>
			)}
		</div>
	)
}

export default CarDetailsHeader
