'use client'

import { useState } from 'react'
import CarList from './CarList'
import CarTitle from './CarTitle'
import CarActionButton from './CarActionButton'
import ContentCard from '../common/ContentCard/ContentCard'

const CarTechnicalDetails = ({ data }) => {
	const [isListOpen, setIsListOpen] = useState(false)
	return (
		<ContentCard>
			<CarTitle title='Technische Daten' />
			<CarList data={data} isListOpen={isListOpen} />
			<CarActionButton isListOpen={isListOpen} setIsListOpen={setIsListOpen} />
		</ContentCard>
	)
}

export default CarTechnicalDetails
