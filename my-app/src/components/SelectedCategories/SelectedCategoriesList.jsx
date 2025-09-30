'use client'

import { SwiperSlide } from 'swiper/react'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import { useState } from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'
import VehicleTypeCard from '../common/VehicleTypeCard/VehicleTypeCard'
import { selectedCategories } from './selectedCategories.data'

const SelectedCategoriesList = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const { windowWidth } = useWindowWidth()
	const isDesktop = windowWidth >= 1014

	return (
		<CustomSwiper
			setActiveIndex={setActiveIndex}
			settings={{
				spaceBetween: 16,
				slidesPerView: 2,
				breakpoints: {
					400: { slidesPerView: 3 },
					600: { slidesPerView: 4 },
					1014: {
						slidesPerView: 4.3,
						spaceBetween: 24,
						slidesPerGroup: 4,
					},
				},
			}}
			showButtonsCondition={isDesktop}
			showPrevButtonCondition={activeIndex > 0}
			showNextButtonCondition={activeIndex < selectedCategories.length - 4}
		>
			{selectedCategories?.map((item, i) => (
				<SwiperSlide key={i}>
					<VehicleTypeCard item={item} />
				</SwiperSlide>
			))}
		</CustomSwiper>
	)
}

export default SelectedCategoriesList
