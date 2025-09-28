'use client'

import Title from '../common/Title/Title'
import { useState } from 'react'
import DealsList from './DealsList'
import DealsTabs from './DealsTabs'
import Container from '../common/Container/Container'

const DealsForYou = () => {
	const [openIndex, setOpenIndex] = useState(0)

	return (
		<Container>
			<div className='p-lg bg-background-light-black border-t border-b border-grey lg:border lg:rounded-lg lg:p-2xl'>
				<Title title='Deals für Dich' />
				<DealsTabs openIndex={openIndex} setOpenIndex={setOpenIndex} />
				<DealsList openIndex={openIndex} />
			</div>
		</Container>
	)
}

export default DealsForYou
