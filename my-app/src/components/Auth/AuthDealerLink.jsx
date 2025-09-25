import Link from 'next/link'

const AuthDealerLink = ({ href, label }) => {
	return (
		<div className='text-md font-bold text-center'>
			<span>Sind Sie Händler?</span>
			<Link className='text-light-orange underline' href={href}>
				{label}
			</Link>
		</div>
	)
}

export default AuthDealerLink
