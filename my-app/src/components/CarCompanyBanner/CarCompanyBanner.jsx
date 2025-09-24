import Image from 'next/image'

const CarCompanyBanner = ({ data }) => {
	return (
		<div className='relative pointer-events-none'>
			<Image
				className='w-full max-h-[329px] rounded-lg object-cover mb-3md'
				src={data?.company?.banner}
				width={978}
				height={326}
				alt={data?.company?.name}
			/>

			<div className='absolute bottom-[5%] left-[1.5%] flex items-center w-[144px] h-[108px] rounded-lg p-lg bg-light-white'>
				<Image
					src={data?.company?.logo}
					width={112}
					height={46}
					alt={data?.company?.name}
				/>
			</div>
		</div>
	)
}

export default CarCompanyBanner
