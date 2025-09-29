import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const PopularBrand = ({ index, brand, arr }) => {
	return (
		<li
			className={clsx(
				'flex items-center justify-center min-h-[110px] border-b odd:border-r border-grey even:last:border-b-0 ',
				index === arr.length - 2 && 'border-b-0',
				[6, 7, 8, 9].includes(index) && 'lg:border-b-0',
				index === 5 || index === arr.length - 1
					? 'lg:border-r-0'
					: 'lg:border-r'
			)}
		>
			<Link
				className='group flex flex-col items-center gap-sm'
				href={brand?.href}
			>
				{brand?.image && (
					<Image src={brand?.image} width={36} height={36} alt={brand?.name} />
				)}

				{brand?.icon && brand.icon}
				<span className='font-bold transition-colors linear duration-300 group-hover:text-dark-grey group-hover:underline'>
					{brand?.name}
				</span>
			</Link>
		</li>
	)
}

export default PopularBrand
