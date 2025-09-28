'use client'

import { SwiperSlide } from 'swiper/react'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import { useState } from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'
import CarCard from '../common/CarCard/CarCard'
import { lastViewed } from './lastViewed.data'

const LastViewedList = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const { windowWidth } = useWindowWidth()

	return (
		<CustomSwiper
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
			{lastViewed?.map((item, i) => (
				<SwiperSlide key={i}>
					<CarCard item={item} />
				</SwiperSlide>
			))}
		</CustomSwiper>
	)
}

export default LastViewedList
