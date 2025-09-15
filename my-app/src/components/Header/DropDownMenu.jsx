import clsx from 'clsx'
import { TiArrowSortedUp } from 'react-icons/ti'
import DropDownItemMain from './DropDownItemMain'
import DropDownItemList from './DropDownItemList'

const DropDownMenu = ({ list }) => {
	return (
		<div className='absolute h-auto w-[600px] top-[70px] left-1/2 -translate-x-1/2 rounded-lg p-2lg bg-background-light-black z-[10]'>
			<ul className='flex gap-2lg'>
				{list.map((item, i) => {
					return (
						<li key={i}>
							<span
								className={clsx(
									'block text-sm text-dark-grey',
									i !== 0 && 'px-md',
									i === 0 && 'mb-md'
								)}
							>
								{item.title}
							</span>
							{i === 0 ? (
								<DropDownItemMain item={item} />
							) : (
								<DropDownItemList list={item.list} />
							)}
						</li>
					)
				})}
			</ul>
			<TiArrowSortedUp
				className='absolute -top-[24px] left-1/2 -translate-x-1/2 text-background-light-black'
				size={40}
			/>
		</div>
	)
}

export default DropDownMenu
