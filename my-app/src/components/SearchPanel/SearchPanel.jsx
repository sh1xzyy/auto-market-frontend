import Container from '@/components/common/Container/Container'
import ContentCard from '../common/ContentCard/ContentCard'
import { searchData } from '@/app/(home)/vehicles/searchData.data'
import IconButton from '../common/IconButton/IconButton'
import { IoMdClose } from 'react-icons/io'
import SearchPanelSortSelector from './SearchPanelSortSelector'
import SearchPanelPopularModels from './SearchPanelPopularModels'
import SearchPanelHeader from './SearchPanelHeader'
import SearchPanelActiveFilters from './SearchPanelActiveFilters'

const SearchPanel = () => {
	const options = [
		'standard-sorting',
		'firstCheap',
		'firstExpensive',
		'firstWithSmallMileage',
		'firstWithBigMileage',
		'firstOldest',
		'firstNewest',
		'firstAdvertOldest',
		'firstAdvertNewest',
	]

	const selectorOptions = options?.map(option => ({
		value: option,
		label: option,
	}))

	return (
		<Container>
			<ContentCard>
				<SearchPanelHeader data={searchData} />
				<SearchPanelActiveFilters searchFilters={searchData?.searchFilters} />

				<div className='flex items-center justify-between'>
					<SearchPanelPopularModels popularModels={searchData?.popularModels} />
					<SearchPanelSortSelector selectorOptions={selectorOptions} />
				</div>
			</ContentCard>
		</Container>
	)
}

export default SearchPanel
