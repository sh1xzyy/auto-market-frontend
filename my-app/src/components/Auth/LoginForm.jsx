import { Form, Formik } from 'formik'
import Link from 'next/link'
import AuthSubmitButton from './AuthSubmitButton'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

const LoginForm = () => {
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
					<PasswordField />

					<Link className='block text-md font-bold underline mb-2lg' href='/'>
						Passwort vergessen?
					</Link>

					<AuthSubmitButton label='Anmelden' />
				</Form>
			)}
		</Formik>
	)
}

export default LoginForm
