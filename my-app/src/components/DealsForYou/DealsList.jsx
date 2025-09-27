'use client'

import { useState } from 'react'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import CarCard from './CarCard'
import { cars } from './cars.data'
import SpecialOfferCard from './SpecialOfferCard'
import { SwiperSlide } from 'swiper/react'
import useWindowWidth from '@/hooks/useWindowWidth'

const DealsList = ({ openIndex }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const { windowWidth } = useWindowWidth()

	return (
		<CustomSwiper
			data={cars}
			setActiveIndex={setActiveIndex}
			settings={{
				spaceBetween: 16,
				slidesPerView: 1,
				breakpoints: {
					470: { slidesPerView: 2 },
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
			{cars[openIndex].list?.map((item, i) => (
				<SwiperSlide key={i}>
					{i === 0 ? (
						<SpecialOfferCard item={item} openIndex={openIndex} />
					) : (
						<CarCard item={item} openIndex={openIndex} />
					)}
				</SwiperSlide>
			))}
		</CustomSwiper>
	)
}

export default DealsList
