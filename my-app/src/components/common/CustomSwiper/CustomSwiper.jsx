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
			className='relative w-full sm:max-w-[640px] lg:rounded-lg'
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
		>
			{data?.images?.map((href, i) => (
				<SwiperSlide key={i}>
					<Image
						className='max-h-[375px] sm:max-h-[485px] object-cover'
						src={href}
						width={640}
						height={375}
						alt={data?.name}
					/>
				</SwiperSlide>
			))}

			<div className='flex items-center gap-2sm rounded-md absolute bottom-[2%] right-[8px] p-2sm bg-grey-05 z-10'>
				<FaRegImage size={16} />
				<span className='font-bold text-sm'>
					{activeIndex + 1}/{data?.images?.length}
				</span>
			</div>
			<SwiperSlideButton type='prev' />
			<SwiperSlideButton type='next' />
		</Swiper>
	)
}

export default CustomSwiper
