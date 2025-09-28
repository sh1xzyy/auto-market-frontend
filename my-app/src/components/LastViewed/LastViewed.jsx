import ContentCard from '../common/ContentCard/ContentCard'
import Container from '../common/Container/Container'
import Title from '../common/Title/Title'
import LastViewedList from './LastViewedList'

const LastViewed = () => {
	return (
		<Container>
			<ContentCard>
				<Title className='mb-lg' title='Zuletzt angesehen' />
				<LastViewedList />
			</ContentCard>
		</Container>
	)
}

export default LastViewed
