import clsx from 'clsx'

const IconButton = ({
	icon: Icon,
	size = 20,
	onClick,
	className = 'px-md py-md',
	iconClassName = 'group-hover:fill-light-white',
	ariaLabel,
	children,
}) => {
	return (
		<button
			className={clsx('group transition-colors duration-300', className)}
			type='button'
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<Icon
				className={clsx(
					'fill-light-grey transition-colors duration-300',
					iconClassName
				)}
				size={size}
			/>
			{children}
		</button>
	)
}

export default IconButton
