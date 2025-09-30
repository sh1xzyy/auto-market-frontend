import clsx from 'clsx'

const NewBadge = ({ className }) => {
	return (
		<div
			className={clsx(
				'flex items-center w-fit px-sm text-sm bg-red-orange rounded-sm h-[20px]',
				className
			)}
		>
			<span className='text-dark-blue font-bold italic'>NEU</span>
		</div>
	)
}

export default NewBadge
