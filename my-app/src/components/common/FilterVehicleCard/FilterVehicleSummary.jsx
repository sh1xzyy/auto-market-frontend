import NewBadge from '../badges/NewBadge'
import SponsoredBadge from '../badges/SponsoredBadge'

const FilterVehicleSummary = ({ item, isDesktop }) => {
	return (
		<div className='flex gap-lg mb-3md lg:mb-lg'>
			<div className='font-bold'>
				{item?.isSponsored && !isDesktop && (
					<SponsoredBadge className=' mb-xs' />
				)}
				{item?.isNeu && <NewBadge className='mb-xs' />}
				{!isDesktop ? (
					<h2>
						{item?.name} {item?.description}
					</h2>
				) : (
					<>
						<div className='lg:flex lg:items-center lg:gap-sm lg:mb-xs'>
							{item?.isSponsored && <SponsoredBadge />}
							<h2>{item?.name}</h2>
						</div>
						<p className='text-md'>{item?.description}</p>
					</>
				)}
			</div>
		</div>
	)
}

export default FilterVehicleSummary
