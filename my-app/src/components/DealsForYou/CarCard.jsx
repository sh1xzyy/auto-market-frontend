import { RiParkingBoxLine } from 'react-icons/ri'
import IconButton from '../common/IconButton/IconButton'
import CarCardPrice from './CarCardPrice'
import CarCardImage from './CarCardImage'
import CarCardSpecs from './CarCardSpecs'
import CarCardLocation from './CarCardLocation'
import Link from 'next/link'

const CarCard = ({ item }) => {
	return (
		<div className='relative w-full max-w-[260px]'>
			<IconButton
				icon={RiParkingBoxLine}
				iconClassName='var(--color-super-light-violet)'
				size={16}
				className='absolute flex items-center justify-center top-2sm right-2sm w-[32px] h-[32px] bg-black rounded-[50%]'
				onClick={() => console.log('added to favorite')}
			/>
			<Link href='/vehicles/details'>
				<CarCardImage item={item} />
				<div className='flex flex-col gap-y-3md'>
					<span className='font-bold'>{item?.title}</span>
					<CarCardPrice item={item} />
					<CarCardSpecs item={item} />
					<CarCardLocation location={item?.location} />
				</div>
			</Link>
		</div>
	)
}

export default CarCard
