import clsx from 'clsx'
import Link from 'next/link'

const BurgerDropDownMenuCategoryItemList = ({ list }) => {
	return (
		<ul>
			{list.map(({ src, label, isNew }, i) => (
				<li key={i} className='border-b border-grey last:border-0'>
					<Link
						className={clsx(
							'leading-6 block font-medium py-2lg pl-2xl pr-2lg focus:shadow-card',
							isNew && 'flex items-center gap-sm'
						)}
						href={src}
					>
						<span className='block max-w-[185px]'>{label}</span>
						{isNew && (
							<span className='font-bold text-sm rounded-md px-2sm py-xs ml-sm bg-light-blue'>
								NEU
							</span>
						)}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default BurgerDropDownMenuCategoryItemList
