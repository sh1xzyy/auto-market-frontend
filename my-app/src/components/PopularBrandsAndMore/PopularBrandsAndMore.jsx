import Container from '../common/Container/Container'
import ContentCard from '../common/ContentCard/ContentCard'
import Title from '../common/Title/Title'
import PopularBrandsAndMoreList from './PopularBrandsAndMoreList'

const PopularBrandsAndMore = () => {
	return (
		<Container>
			<ContentCard>
				<Title
					className='mb-lg'
					title='Beliebte Automarken und mehr auf unserem Fahrzeugmarkt'
				/>
				<PopularBrandsAndMoreList />
			</ContentCard>
		</Container>
	)
}

export default PopularBrandsAndMore
