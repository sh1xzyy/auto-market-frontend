'use client'

import CarDetailsHeader from './CarDetailsHeader'
import CarPriceInfo from './CarPriceInfo'
import CarFinancing from './CarFinancing'
import CarContactActions from './CarContactActions'
import useWindowWidth from '@/hooks/useWindowWidth'
import CarSellerInfo from './CarSellerInfo'
import ContentCard from '../common/ContentCard/ContentCard'

const CarOverview = ({
	data: {
		name,
		description,
		fairPrice,
		grossPrice,
		netPrice,
		monthlyRate,
		phone,
		company,
		location,
	},
}) => {
	const { windowWidth } = useWindowWidth()
	const isDesktop = windowWidth >= 1014

	return (
		<ContentCard>
			<CarDetailsHeader
				name={name}
				description={description}
				isDesktop={isDesktop}
			/>
			<CarPriceInfo
				grossPrice={grossPrice}
				fairPrice={fairPrice}
				netPrice={netPrice}
			/>
			<CarFinancing monthlyRate={monthlyRate} />

			{isDesktop && <hr className='my-lg text-grey' />}
			{isDesktop && (
				<CarSellerInfo company={company} phone={phone} location={location} />
			)}

			<CarContactActions phone={phone} isDesktop={isDesktop} />
		</ContentCard>
	)
}

export default CarOverview
