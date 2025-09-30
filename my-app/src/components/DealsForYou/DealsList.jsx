'use client'

import { useState } from 'react'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import { cars } from './cars.data'
import SpecialOfferCard from './SpecialOfferCard'
import { SwiperSlide } from 'swiper/react'
import useWindowWidth from '@/hooks/useWindowWidth'
import VehicleCard from '../common/VehicleCard/VehicleCard'

const DealsList = ({ openIndex }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const { windowWidth } = useWindowWidth()
	const isDesktop = windowWidth >= 1014

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
			showButtonsCondition={isDesktop}
			showPrevButtonCondition={activeIndex > 0}
		>
			{cars[openIndex].list?.map((item, i) => (
				<SwiperSlide key={i}>
					{i === 0 ? (
						<SpecialOfferCard item={item} />
					) : (
						<VehicleCard item={item} />
					)}
				</SwiperSlide>
			))}
		</CustomSwiper>
	)
}

export default DealsList
