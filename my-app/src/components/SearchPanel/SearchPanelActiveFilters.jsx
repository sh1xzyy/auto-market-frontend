'use client'

import { IoMdClose } from 'react-icons/io'
import IconButton from '../common/IconButton/IconButton'

const SearchPanelActiveFilters = ({ searchFilters }) => {
	return (
		<div className='mb-xl'>
			<ul className='flex gap-sm'>
				{searchFilters?.map((filter, i) => (
					<li
						className='flex items-center justify-center gap-sm flex-wrap bg-super-black p-1sm pl-1md rounded-md'
						key={i}
					>
						<span className='font-bold text-md'>{filter}</span>
						<IconButton
							icon={IoMdClose}
							size={20}
							ariaLabel='delete filter button'
							onClick={() => console.log('deleted search filter')}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SearchPanelActiveFilters
