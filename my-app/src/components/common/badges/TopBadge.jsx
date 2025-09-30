import clsx from 'clsx'

const TopBadge = ({ className }) => {
	return (
		<div
			className={clsx(
				'flex items-center justify-center absolute top-[10px] -left-[8%] w-[25%] h-[24px] -rotate-30 bg-light-orange z-10 shadow-[0_1px_2px_var(--color-overlay)]',
				className
			)}
		>
			<span className='font-bold'>Top</span>
		</div>
	)
}

export default TopBadge
