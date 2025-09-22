'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperSlideButton from './SwiperSlideButton'
import Image from 'next/image'
import { FaRegImage } from 'react-icons/fa'
import { useState } from 'react'

const CustomSwiper = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(1)
	return (
		<Swiper
			className='relative w-full sm:max-w-[640px]'
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
			onSwiper={swiper => console.log(swiper)}
		>
			{data.map((href, i) => (
				<SwiperSlide key={i}>
					<Image
						className='max-h-[375px] sm:max-h-[485px] object-contain'
						src={href}
						width={640}
						height={375}
						alt='audi a3'
					/>
				</SwiperSlide>
			))}

			<div className='flex items-center gap-2sm rounded-md absolute bottom-[10%] right-[8px] p-2sm bg-grey-05 z-10'>
				<FaRegImage size={16} />
				<span className='font-bold text-sm'>
					{activeIndex + 1}/{data.length}
				</span>
			</div>
			<SwiperSlideButton type='prev' />
			<SwiperSlideButton type='next' />
		</Swiper>
	)
}

export default CustomSwiper
