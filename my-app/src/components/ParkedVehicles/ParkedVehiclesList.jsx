'use client'

import { SwiperSlide } from 'swiper/react'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import { parkedVehicles } from './parkedVehicles.data'
import { useState } from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'
import VehicleCard from '../common/VehicleCard/VehicleCard'

const ParkedVehiclesList = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const { windowWidth } = useWindowWidth()

	return (
		<CustomSwiper
			setActiveIndex={setActiveIndex}
			settings={{
				spaceBetween: 16,
				slidesPerView: 1,
				breakpoints: {
					400: { slidesPerView: 2 },
					640: { slidesPerView: 3 },
					1014: {
						slidesPerView: 4,
						spaceBetween: 24,
					},
				},
			}}
			showButtonsCondition={windowWidth >= 1014}
			showPrevButtonCondition={activeIndex > 0}
		>
			{parkedVehicles?.map((item, i) => (
				<SwiperSlide key={i}>
					<VehicleCard item={item} />
				</SwiperSlide>
			))}
		</CustomSwiper>
	)
}

export default ParkedVehiclesList
