import Link from 'next/link'

const DropDownSubItem = ({ el: { src, label, isNew } }) => {
	return (
		<li>
			<div className='flex items-center'>
				<Link
					className='block font-medium text-md py-md px-md transition linear duration-300 hover:text-dark-grey hover:underline'
					href={src}
				>
					{label}
				</Link>
				{isNew && (
					<span className='font-bold text-sm rounded-md px-2sm py-xs bg-light-blue'>
						NEU
					</span>
				)}
			</div>
		</li>
	)
}

export default DropDownSubItem
