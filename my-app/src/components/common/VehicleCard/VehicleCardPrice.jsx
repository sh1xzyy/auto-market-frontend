import FairPriceBar from '../FairPriceBar/FairPriceBar'

const VehicleCardPrice = ({ item }) => {
	return (
		<div className='flex items-end gap-sm'>
			<div className='flex flex-col'>
				{item?.discountedPrice && (
					<span className='text-md font-bold text-super-light-orange line-through'>
						{item?.discountedPrice} €
					</span>
				)}
				{item?.grossPrice && (
					<span className='font-bold'>{item?.grossPrice} €</span>
				)}
			</div>
			<FairPriceBar fairPrice={item?.fairPrice} className='w-[13px] h-[4px]' />
		</div>
	)
}

export default VehicleCardPrice
