import FairPriceBar from '../FairPriceBar/FairPriceBar'

const FilterVehiclePrice = ({ item, isDesktop }) => {
	return (
		<div className='lg:flex lg:items-center lg:gap-lg lg:mb-lg'>
			<div className='flex flex-col font-bold mb-2sm lg:mb-0'>
				<span className='lg:text-lg'>{item?.grossPrice} €</span>
				{!isDesktop && (
					<span className='text-md'>{item?.monthlyRate} MwSt.</span>
				)}
			</div>

			<FairPriceBar className='w-[17px] h-[8px]' fairPrice={item?.fairPrice} />
		</div>
	)
}

export default FilterVehiclePrice
