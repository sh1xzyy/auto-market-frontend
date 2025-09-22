'use client'

import clsx from 'clsx'
import { IoIosArrowDown } from 'react-icons/io'
import { useSwiper } from 'swiper/react'
import IconButton from '../IconButton/IconButton'

const SwiperSlideButton = ({ title, type }) => {
	const swiper = useSwiper()
	return (
		<IconButton
			className={clsx(
				'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[48px] h-[48px] rounded-[50%] bg-background-dark-black',
				type === 'next' ? 'right-[8px]' : 'left-[8px]'
			)}
			icon={IoIosArrowDown}
			iconClassName={clsx(
				'group-hover:fill-light-white',
				type === 'next' ? '-rotate-90' : 'rotate-90'
			)}
			size={24}
			onClick={() =>
				type === 'next' ? swiper.slideNext() : swiper.slidePrev()
			}
			ariaLabel={type === 'next' ? 'next slide button' : 'prev slide button'}
		/>
	)
}

export default SwiperSlideButton
