import Image from 'next/image'

const VehicleTypeImage = ({ item }) => {
	return (
		<div className='relative w-[132px] h-[88px] mb-3md lg:mb-lg'>
			<Image
				className='object-cover'
				src={item?.image}
				alt={item?.label}
				fill
			/>
		</div>
	)
}

export default VehicleTypeImage
