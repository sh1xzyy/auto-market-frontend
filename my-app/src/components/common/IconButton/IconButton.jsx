import clsx from 'clsx'

const IconButton = ({
	icon: Icon,
	size = 20,
	onClick,
	className = '',
	ariaLabel,
	children,
}) => {
	return (
		<button
			className={clsx(
				'group px-md py-md transition-colors duration-300',
				className
			)}
			type='button'
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<Icon
				className='fill-light-grey transition-colors duration-300 group-hover:fill-light-white'
				size={size}
			/>
			{children}
		</button>
	)
}

export default IconButton
