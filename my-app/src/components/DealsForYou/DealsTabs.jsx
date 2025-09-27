'use client'

import clsx from 'clsx'
import { buttons } from './buttons.data'
import { GrFormCheckmark } from 'react-icons/gr'
import CustomSwiper from '../common/CustomSwiper/CustomSwiper'
import { SwiperSlide } from 'swiper/react'

const DealsTabs = ({ openIndex, setOpenIndex }) => {
	return (
		<CustomSwiper
			className='mb-3md lg:mb-lg'
			showButtonsCondition={false}
			settings={{
				spaceBetween: 8,
				slidesPerView: buttons.length - 0.5,
			}}
		>
			{buttons?.map(({ icon, label }, i) => (
				<SwiperSlide className='!w-fit' key={i}>
					<button
						className={clsx(
							'flex items-center justify-center w-full h-[36px] px-2md py-3md rounded-sm transition-colors linear duration-300',
							openIndex !== i &&
								'bg-background-light-black border-2 border-black hover:border-grey',
							openIndex === i && 'bg-black hover:bg-grey'
						)}
						type='button'
						onClick={() => setOpenIndex(i)}
					>
						{icon}
						<div className='flex items-center gap-x-sm'>
							<span className='font-bold text-md'>{label}</span>
							{openIndex === i && <GrFormCheckmark size={20} />}
						</div>
					</button>
				</SwiperSlide>
			))}
		</CustomSwiper>
	)
}

export default DealsTabs
