'use client'

import ContentCard from '../ContentCard/ContentCard'
import Link from 'next/link'
import FilterVehicleSummary from './FilterVehicleSummary'
import FilterVehicleActions from './FilterVehicleActions'
import TopBadge from '../badges/TopBadge'
import FilterVehicleSellerInfo from './FilterVehicleSellerInfo'
import FilterVehicleSpecs from './FilterVehicleSpecs'
import useWindowWidth from '@/hooks/useWindowWidth'
import FilterVehicleEquipment from './FilterVehicleEquipment'
import FilterVehicleImage from './FilterVehicleImage'
import FilterVehiclePrice from './FilterVehiclePrice'
import FilterVehicleInsurance from './FilterVehicleInsurance'

const FilterVehicleCard = ({ item }) => {
	const { windowWidth } = useWindowWidth()
	const isDesktop = windowWidth >= 1014

	return (
		<ContentCard className='relative overflow-hidden'>
			<Link href='/vehicles/details'>
				{item?.isTop && <TopBadge />}
				<div className='flex lg:flex gap-lg'>
					<FilterVehicleImage item={item} />

					<div className='flex flex-col'>
						<FilterVehicleSummary item={item} isDesktop={isDesktop} />
						<FilterVehiclePrice item={item} isDesktop={isDesktop} />
						{isDesktop && (
							<>
								<FilterVehicleInsurance item={item} />
								{item?.specs && <FilterVehicleSpecs item={item} />}
								{item?.equipment && <FilterVehicleEquipment item={item} />}
							</>
						)}
					</div>
				</div>
				{!isDesktop && (
					<>
						{item?.specs && <FilterVehicleSpecs item={item} />}
						{item?.equipment && <FilterVehicleEquipment item={item} />}
					</>
				)}
				{!isDesktop && (
					<FilterVehicleSellerInfo item={item} isDesktop={isDesktop} />
				)}
			</Link>

			<div className='mt-lg lg:flex lg:items-center lg:justify-between pt-lg border-t border-grey'>
				{isDesktop && (
					<FilterVehicleSellerInfo item={item} isDesktop={isDesktop} />
				)}
				<FilterVehicleActions item={item} isDesktop={isDesktop} />
			</div>
		</ContentCard>
	)
}

export default FilterVehicleCard
