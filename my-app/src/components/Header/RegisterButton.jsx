import clsx from 'clsx'
import Link from 'next/link'

const RegisterButton = ({ className = '' }) => {
	return (
		<Link
			href='/auth'
			className={clsx(
				'flex items-center justify-center h-[36px] w-full px-2md py-3md font-bold rounded-md bg-light-violet transition linear duration-300 hover:bg-dark-violet',
				className
			)}
		>
			<span className='text-md'>Anmelden</span>
		</Link>
	)
}

export default RegisterButton
