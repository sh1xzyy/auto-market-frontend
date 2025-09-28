import Image from 'next/image'

const CarCardImage = ({ item }) => {
	return (
		<div className='relative w-full h-[168px] mb-3md '>
			<Image
				className='rounded-md object-cover'
				src={item?.image}
				fill
				alt={item?.title}
			/>
		</div>
	)
}

export default CarCardImage
