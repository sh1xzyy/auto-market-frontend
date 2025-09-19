import Link from 'next/link'

const MoreFiltersLink = ({ item }) => {
	return (
		<Link
			href={item?.href}
			className='flex items-center justify-center gap-2sm w-full h-[36px] text-light-white '
		>
			{item?.icon}
			<span className='font-bold text-md'>{item?.label}</span>
		</Link>
	)
}

export default MoreFiltersLink
