import Link from 'next/link'

const LegalText = () => {
	return (
		<div className='mb-2lg'>
			<p className='text-md font-bold leading-[20px]'>
				Es gelten die mobile.de&nbsp;
				<Link className='text-light-orange underline' href='/'>
					AGB
				</Link>
				&nbsp;. Informationen zur Verarbeitung aller Daten werden in der
				mobile.de&nbsp;
				<Link className='text-light-orange underline' href='/'>
					Datenschutzerklärung
				</Link>
				&nbsp;beschrieben.
			</p>
		</div>
	)
}

export default LegalText
