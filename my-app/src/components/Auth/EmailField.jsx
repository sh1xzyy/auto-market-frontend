import { Field } from 'formik'

const EmailField = () => {
	return (
		<div className='mb-2lg'>
			<label className='block mb-sm text-md font-bold' htmlFor='email'>
				E-Mail-Adresse
			</label>
			<Field
				className='px-2lg h-[56px] border border-super-grey rounded-md w-full sm:px-lg sm:py-2md sm:h-[44px] sm:text-md transition-colors linear duration-300 hover:border-dark-white'
				type='text'
				name='email'
				id='email'
			/>
		</div>
	)
}

export default EmailField
