'use client'

import { useState } from 'react'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { FaRegImage } from 'react-icons/fa6'

const CarImageSwiper = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(1)

	return (
		<CustomSwiper
			setActiveIndex={setActiveIndex}
			className='sm:max-w-[640px] lg:rounded-lg'
			settings={{
				spaceBetween: 0,
				slidesPerView: 1,
			}}
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
		</CustomSwiper>
	)
}

export default CarImageSwiper
