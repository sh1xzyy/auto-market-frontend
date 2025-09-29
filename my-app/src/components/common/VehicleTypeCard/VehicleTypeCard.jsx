import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import VehicleTypeImage from './VehicleTypeImage'
import VehicleTypeInfo from './VehicleTypeInfo'

const VehicleTypeCard = ({ item }) => {
	return (
		<Link href={item?.href}>
			<div
				className={clsx(
					'flex flex-col items-center p-2md rounded-lg lg:p-lg',
					item?.type === 'electro' ? 'bg-dark-blue' : 'bg-background-dark-black'
				)}
			>
				<VehicleTypeImage item={item} />
				<VehicleTypeInfo item={item} />
			</div>
		</Link>
	)
}

export default VehicleTypeCard
