import clsx from 'clsx'

const Title = ({ title, className }) => {
	return (
		<h2 className={clsx('text-xl font-extrabold leading-[32px]', className)}>
			{title}
		</h2>
	)
}

export default Title
