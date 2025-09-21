import { Form, Formik } from 'formik'
import SelectorField from './SelectorField'
import Checkbox from './Checkbox'
import RadioButtons from './RadioButtons'
import SubmitButton from './SubmitButton'
import FilterButtons from './FilterButtons'
import clsx from 'clsx'
import { typeToClass } from './typeToClass.data'

const initialValues = {
	brand: '',
	model: '',
	registerDate: '',
	kilometersTo: '',
	paymentMethod: 'cash',
	priceUntil: '',
	cityOrZipCode: '',
	onlyElectricCars: false,
}

const FiltersForm = ({ openIndex, vehiclesFields }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => console.log(values)}
		>
			<Form className='grid grid-cols-2 gap-2lg w-full items-center bg-background-light-black p-2lg sm:grid-cols-[156px_1fr_1fr_1fr] md:grid-cols-4 lg:rounded-br-2xl lg:rounded-tr-2xl'>
				{vehiclesFields[openIndex !== 4 ? openIndex : 5].map(item => (
					<div
						className={clsx(typeToClass[item?.type] || typeToClass[item?.id])}
						key={item?.id}
					>
						{item?.type === 'selector' && <SelectorField item={item} />}

						{item?.type === 'checkbox' && <Checkbox item={item} />}

						{item?.type === 'radio' && <RadioButtons item={item} />}

						{item?.type === 'submit' && <SubmitButton item={item} />}

						{item?.type === 'filterButton' && <FilterButtons item={item} />}
					</div>
				))}
			</Form>
		</Formik>
	)
}

export default FiltersForm
