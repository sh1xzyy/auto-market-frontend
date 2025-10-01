'use client'

import { CustomSelector } from '../common/CustomSelector/CustomSelector'

const SearchPanelSortSelector = ({ selectorOptions }) => {
	return (
		<div className='w-[220px]'>
			<label
				className='block text-md font-bold mb-xs'
				htmlFor='optionsSelector'
			>
				Sortieren nach
			</label>
			<CustomSelector
				className='min-w-[220px]'
				name='optionsSelector'
				id='optionsSelector'
				placeholder='halllooo'
				options={selectorOptions}
				settings={{ defaultValue: selectorOptions[0]?.label }}
			/>
		</div>
	)
}

export default SearchPanelSortSelector
