import Container from '../common/Container/Container'
import ContentCard from '../common/ContentCard/ContentCard'
import Title from '../common/Title/Title'
import SelectedCategoriesList from './SelectedCategoriesList'

const SelectedCategories = () => {
	return (
		<Container>
			<ContentCard className='lg:p-xl'>
				<Title className='mb-lg text-xl' title='Ausgewählte Kategorien' />
				<SelectedCategoriesList />
			</ContentCard>
		</Container>
	)
}

export default SelectedCategories
