'use client'

import { FiPlus } from 'react-icons/fi'

const SearchPanelPopularModels = ({ popularModels }) => {
	return (
		<div>
			<h3 className='font-bold text-md mb-3md'>Beliebte Modelle</h3>
			<div className='flex flex-wrap gap-sm'>
				{popularModels?.map((model, i) => (
					<button
						className='flex items-center gap-sm h-[32px] p-1sm pr-1md border border-background-dark-black bg-transparent rounded-md'
						key={i}
						type='submit'
						onClick={() => console.log(model, 'Selected')}
					>
						<FiPlus color='var(--color-super-grey)' size={16} />
						<span className='text-md font-bold'>{model}</span>
					</button>
				))}
			</div>
		</div>
	)
}

export default SearchPanelPopularModels
