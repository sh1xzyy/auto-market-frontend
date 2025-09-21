import clsx from 'clsx'

const Container = ({ children, className = '' }) => {
	return (
		<div className={clsx('container max-w-lg mx-auto', className)}>
			{children}
		</div>
	)
}

export default Container
