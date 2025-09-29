import Container from '../common/Container/Container'
import ContentCard from '../common/ContentCard/ContentCard'
import Title from '../common/Title/Title'
import PopularBrandsList from './PopularBrandsList'

const PopularBrands = () => {
	return (
		<Container>
			<ContentCard>
				<Title className='mb-lg' title='Beliebte Automarken' />
				<PopularBrandsList />
			</ContentCard>
		</Container>
	)
}

export default PopularBrands
