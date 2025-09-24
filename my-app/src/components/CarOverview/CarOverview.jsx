'use client'

import CarDetailsHeader from './CarDetailsHeader'
import CarPriceInfo from './CarPriceInfo'
import CarFinancing from './CarFinancing'
import CarContactActions from './CarContactActions'
import useWindowWidth from '@/hooks/useWindowWidth'
import CarSellerInfo from './CarSellerInfo'

const CarOverview = ({
	data: {
		name,
		description,
		grossPrice,
		netPrice,
		rentPrice,
		phone,
		company,
		location,
	},
}) => {
	const { windowWidth } = useWindowWidth()

	return (
		<div className='p-lg font-bold bg-background-light-black lg:rounded-lg'>
			<CarDetailsHeader
				name={name}
				description={description}
				windowWidth={windowWidth}
			/>

			<CarPriceInfo grossPrice={grossPrice} netPrice={netPrice} />

			<CarFinancing rentPrice={rentPrice} />

			{windowWidth >= 1014 && <hr className='my-lg text-grey' />}

			{windowWidth >= 1014 && (
				<CarSellerInfo company={company} phone={phone} location={location} />
			)}

			<CarContactActions phone={phone} windowWidth={windowWidth} />
		</div>
	)
}

export default CarOverview
