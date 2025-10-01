'use client'

import { carData } from './carData.data'
import Container from '@/components/common/Container/Container'
import CarOverview from '@/components/CarOverview/CarOverview'
import useWindowWidth from '@/hooks/useWindowWidth'
import CarSpecsSummary from '@/components/CarSpecsSummary/CarSpecsSummary'
import CarTechnicalDetails from '@/components/CarTechnicalDetails/CarTechnicalDetails'
import CarEquipment from '@/components/CarEquipment/CarEquipment'
import CarGoBackButton from '@/components/CarGoBackButton/CarGoBackButton'
import CarCompanyBanner from '@/components/CarCompanyBanner/CarCompanyBanner'
import CarImageSwiper from '@/components/CarImageSwiper/CarImageSwiper'

const Page = () => {
	const { windowWidth } = useWindowWidth()
	const isDesktop = windowWidth >= 1014

	return (
		<div className='lg:py-3md'>
			<Container className='lg:px-2lg'>
				{isDesktop && <CarCompanyBanner data={carData} />}
				{isDesktop && <CarGoBackButton />}

				<div className='flex flex-col lg:flex-row lg:gap-2lg'>
					<div>
						<section className='lg:mb-lg'>
							<CarImageSwiper data={carData} />
						</section>

						{!isDesktop && (
							<section className='mb-lg'>
								<CarOverview data={carData} />
							</section>
						)}

						<section className='mb-lg'>
							<CarSpecsSummary data={carData} />
						</section>

						<section className='mb-lg'>
							<CarTechnicalDetails data={carData} />
						</section>

						<section className='mb-lg'>
							<CarEquipment data={carData} />
						</section>
					</div>

					{isDesktop && (
						<section>
							<CarOverview data={carData} />
						</section>
					)}
				</div>
			</Container>
		</div>
	)
}
export default Page
