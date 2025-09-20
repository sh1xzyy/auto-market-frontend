'use client'

import { CustomSelector } from '../common/CustomSelector/CustomSelector'
import IconButton from '../common/IconButton/IconButton'

const SelectorField = ({ item }) => {
	return (
		<>
			<label
				className='flex items-center gap-2sm font-bold text-md mb-sm'
				htmlFor={item?.id}
			>
				{item?.label}
				{item?.labelIcon && (
					<IconButton
						icon={item?.labelIcon}
						size={16}
						onClick={() => console.log('some drop down menu')}
						ariaLabel={item?.ariaLabel}
					/>
				)}
			</label>
			<CustomSelector name={item?.name} id={item?.id} placeholder='Beliebig' />
		</>
	)
}

export default SelectorField
