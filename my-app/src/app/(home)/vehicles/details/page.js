'use client'

import CustomSwiper from '@/components/common/CustomSwiper/CustomSwiper'
import { carData } from './carData.data'
import Container from '@/components/common/Container/Container'
import CarOverview from '@/components/CarOverview/CarOverview'
import useWindowWidth from '@/hooks/useWindowWidth'
import CarSpecsSummary from '@/components/CarSpecsSummary/CarSpecsSummary'
import CarTechnicalDetails from '@/components/CarTechnicalDetails/CarTechnicalDetails'
import CarEquipment from '@/components/CarEquipment/CarEquipment'
import Image from 'next/image'

const Page = () => {
	const { windowWidth } = useWindowWidth()
	return (
		<Container className='lg:px-2lg'>
			<Image
				className='w-full max-h-[329px] rounded-lg object-cover mb-3md'
				src={carData?.company?.banner}
				width={978}
				height={326}
				alt={carData?.company?.name}
			/>
			<div className='flex flex-col lg:flex-row lg:gap-2lg'>
				<div>
					<section className='lg:mb-lg'>
						<CustomSwiper data={carData} />
					</section>

					{windowWidth < 1014 && (
						<section className='mb-lg border-b border-grey'>
							<CarOverview data={carData} />
						</section>
					)}

					<section className='mb-lg border-t border-b border-grey lg:border lg:rounded-lg'>
						<CarSpecsSummary data={carData} />
					</section>

					<section className='mb-lg border-t border-b border-grey lg:border lg:rounded-lg'>
						<CarTechnicalDetails data={carData} />
					</section>

					<section className='mb-lg border-t border-b border-grey lg:border lg:rounded-lg'>
						<CarEquipment data={carData} />
					</section>
				</div>

				{windowWidth >= 1014 && (
					<section>
						<CarOverview data={carData} />
					</section>
				)}
			</div>
		</Container>
	)
}
export default Page
