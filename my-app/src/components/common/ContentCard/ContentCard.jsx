import clsx from 'clsx'

const ContentCard = ({ children, className }) => {
	return (
		<div
			className={clsx(
				'p-lg bg-background-light-black border-t border-b border-grey lg:border lg:rounded-lg lg:p-xl',
				className
			)}
		>
			{children}
		</div>
	)
}

export default ContentCard
