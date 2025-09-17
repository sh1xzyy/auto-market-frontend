import clsx from 'clsx'
import Link from 'next/link'

const BurgerDropDownMenuCategoryItemList = ({ list }) => {
	return (
		<ul>
			{list.map(({ src, icon, label, isNew }, i) => (
				<li key={i} className='border-b border-grey last:border-0'>
					<Link
						className={clsx(
							'leading-6 block font-medium py-2lg pl-2xl pr-2lg focus:shadow-card',
							isNew && 'flex items-center gap-sm'
						)}
						href={src}
					>
						<div className='flex items-center gap-md'>
							<span className='block max-w-[185px]'>{icon}</span>
							<span className='block max-w-[185px]'>{label}</span>
							{isNew && (
								<span className='font-bold text-sm rounded-md px-sm py-xs bg-light-blue'>
									NEU
								</span>
							)}
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default BurgerDropDownMenuCategoryItemList
