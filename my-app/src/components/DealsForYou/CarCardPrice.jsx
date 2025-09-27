import FairPriceBar from '../common/FairPriceBar/FairPriceBar'

const CarCardPrice = ({ item }) => {
	return (
		<div className='mb-lg'>
			<div className='flex items-end gap-sm'>
				<div className='flex flex-col'>
					<span className='text-md font-bold text-super-light-orange line-through'>
						{item?.discountedPrice} €
					</span>
					<span className='font-bold'>{item?.grossPrice} €</span>
				</div>
				<FairPriceBar
					fairPrice={item?.fairPrice}
					className='w-[13px] h-[4px]'
				/>
			</div>
		</div>
	)
}

export default CarCardPrice
