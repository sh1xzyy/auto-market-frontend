'use client'

import Title from '../common/Title/Title'
import { useState } from 'react'
import DealsList from './DealsList'
import DealsTabs from './DealsTabs'
import Container from '../common/Container/Container'
import ContentCard from '../common/ContentCard/ContentCard'

const DealsForYou = () => {
	const [openIndex, setOpenIndex] = useState(0)

	return (
		<Container>
			<ContentCard className='lg:p-xl'>
				<Title className='mb-lg text-xl' title='Deals für Dich' />
				<DealsTabs openIndex={openIndex} setOpenIndex={setOpenIndex} />
				<DealsList openIndex={openIndex} />
			</ContentCard>
		</Container>
	)
}

export default DealsForYou
