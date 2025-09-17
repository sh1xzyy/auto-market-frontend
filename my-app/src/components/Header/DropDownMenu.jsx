import clsx from 'clsx'
import { TiArrowSortedUp } from 'react-icons/ti'

const DropDownMenu = ({ className = '', iconClass = '', children }) => {
	return (
		<div
			className={clsx(
				'absolute h-auto top-[70px] rounded-lg bg-background-light-black z-[10] dropDownAnimation',
				className
			)}
		>
			{children}
			<TiArrowSortedUp
				className={clsx(
					'absolute -top-[24px] text-background-light-black',
					iconClass
				)}
				size={40}
			/>
		</div>
	)
}

export default DropDownMenu
