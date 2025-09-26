import { Form, Formik } from 'formik'
import AuthSubmitButton from './AuthSubmitButton'
import PasswordRequirements from './PasswordRequirements'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import CheckboxField from './CheckboxField'
import LegalText from './LegalText'

const RegisterForm = () => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, actions) => {
				console.log(values)
				actions.resetForm()
			}}
		>
			{() => (
				<Form>
					<EmailField />
					<div className='mb-md'>
						<PasswordField />
						<PasswordRequirements />
					</div>

					<CheckboxField />
					<LegalText />

					<AuthSubmitButton label='Registrieren' />
				</Form>
			)}
		</Formik>
	)
}

export default RegisterForm
