import CustomStarRating from '../CustomStarRating/CustomStarRating'
import Image from 'next/image'

const FilterVehicleSellerInfo = ({ item, isDesktop }) => {
	return (
		<div className='flex justify-between items-center text-md font-bold mt-lg lg:m-0 lg:gap-3md'>
			<div className='flex flex-col gap-sm lg:order-2'>
				{!isDesktop ? (
					<>
						<span>{item?.company?.name}</span>
						<span>
							{item?.location?.postalCode} {item?.location?.city}
						</span>
						<div className='flex items-center gap-sm'>
							<CustomStarRating
								rating={item?.company?.rating}
								isReadonly={true}
							/>
							<span>({item?.company?.numberOfReviews})</span>
						</div>
					</>
				) : (
					<>
						<div className='flex items-center gap-3md'>
							<span>{item?.company?.name}</span>
							<div className='flex items-center gap-sm'>
								<CustomStarRating
									rating={item?.company?.rating}
									isReadonly={true}
								/>
								<span>({item?.company?.numberOfReviews})</span>
							</div>
						</div>
						<span>
							{item?.location?.postalCode} {item?.location?.city}
						</span>
					</>
				)}
			</div>

			{item?.company?.logo && (
				<div className='relative w-[80px] h-[60px]'>
					<Image
						className='rounded-md object-cover'
						src={item?.company?.logo}
						alt={item?.company?.name}
						fill
					/>
				</div>
			)}
		</div>
	)
}

export default FilterVehicleSellerInfo
