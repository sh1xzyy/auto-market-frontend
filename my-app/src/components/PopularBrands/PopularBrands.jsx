import Container from '../common/Container/Container'
import ContentCard from '../common/ContentCard/ContentCard'
import Title from '../common/Title/Title'
import PopularBrandsList from './PopularBrandsList'

const PopularBrands = () => {
	return (
		<Container>
			<ContentCard className='lg:p-xl'>
				<Title className='mb-lg text-xl' title='Beliebte Automarken' />
				<PopularBrandsList />
			</ContentCard>
		</Container>
	)
}

export default PopularBrands
