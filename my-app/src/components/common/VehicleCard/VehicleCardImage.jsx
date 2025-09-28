import Image from 'next/image'

const VehicleCardImage = ({ item }) => {
	return (
		<div className='relative w-full h-[168px] mb-3md '>
			{item?.image ? (
				<Image
					className='rounded-md object-cover'
					src={item?.image}
					fill
					alt={item?.title}
				/>
			) : (
				<Image
					className='rounded-md object-cover'
					src='https://placehold.co/200x144/orange/white'
					fill
					alt='placeholder'
					unoptimized
				/>
			)}
		</div>
	)
}

export default VehicleCardImage
