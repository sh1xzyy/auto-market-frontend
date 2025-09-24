'use client'

import CustomSwiper from '@/components/common/CustomSwiper/CustomSwiper'
import { carData } from './carData.data'
import Container from '@/components/common/Container/Container'
import CarOverview from '@/components/CarOverview/CarOverview'
import useWindowWidth from '@/hooks/useWindowWidth'

const Page = () => {
	const { windowWidth } = useWindowWidth()
	return (
		<Container className='lg:px-2lg'>
			<div className='flex flex-col lg:flex-row lg:gap-2lg'>
				<div>
					<CustomSwiper data={carData} />

					{windowWidth < 1014 && (
						<section>
							<CarOverview data={carData} />
						</section>
					)}
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
