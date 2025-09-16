import { TiArrowSortedUp } from 'react-icons/ti'

const DropDownMenu = ({ children }) => {
	return (
		<div className='absolute h-auto w-[570px] top-[70px] left-1/2 -translate-x-1/2 rounded-lg p-2lg bg-background-light-black z-[10]'>
			{children}
			<TiArrowSortedUp
				className='absolute -top-[24px] left-1/2 -translate-x-1/2 text-background-light-black'
				size={40}
			/>
		</div>
	)
}

export default DropDownMenu
