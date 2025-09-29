'use client'

import { Swiper } from 'swiper/react'
import 'swiper/css'
import SwiperSlideButton from './SwiperSlideButton'
import clsx from 'clsx'

const CustomSwiper = ({
	className,
	children,
	setActiveIndex,
	settings,
	showButtonsCondition = true,
	showPrevButtonCondition = true,
	showNextButtonCondition = true,
}) => {
	return (
		<Swiper
			className={clsx('relative w-full', className)}
			onSlideChange={swiper =>
				setActiveIndex && setActiveIndex(swiper.activeIndex)
			}
			{...settings}
		>
			{children}
			{showButtonsCondition && (
				<>
					{showPrevButtonCondition && <SwiperSlideButton type='prev' />}
					{showNextButtonCondition && <SwiperSlideButton type='next' />}
				</>
			)}
		</Swiper>
	)
}

export default CustomSwiper
