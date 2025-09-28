import { RiParkingBoxLine } from 'react-icons/ri'
import VehicleCardPrice from './VehicleCardPrice'
import VehicleCardImage from './VehicleCardImage'
import VehicleCardSpecs from './VehicleCardSpecs'
import VehicleCardLocation from './VehicleCardLocation'
import Link from 'next/link'
import IconButton from '../IconButton/IconButton'

const VehicleCard = ({ item }) => {
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
				<VehicleCardImage item={item} />
				<div className='flex flex-col gap-3md'>
					<span className='font-bold'>{item?.title}</span>
					<VehicleCardPrice item={item} />
					<VehicleCardSpecs item={item} />
					<VehicleCardLocation location={item?.location} />
				</div>
			</Link>
		</div>
	)
}

export default VehicleCard
