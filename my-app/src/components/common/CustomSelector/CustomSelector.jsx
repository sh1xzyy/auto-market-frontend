import Select from 'react-select'

const groupedOptions = [
	{ value: 'bmw', label: 'Bmw' },
	{ value: 'audi', label: 'Audi' },
	{ value: 'mercedes', label: 'Mercedes' },
]

const customStyles = {
	control: base => ({
		...base,
		borderRadius: 'var(--rounded-md)',
		borderColor: 'var(--color-grey)',
		borderRadius: 'var(--radius-md)',
		fontSize: 'var(--text-md)',
		cursor: 'pointer',
		minHeight: '36px',
		maxHeight: '36px',
		backgroundColor: 'var(--color-grey)',
	}),
	option: base => ({
		...base,
		backgroundColor: 'var(--color-grey)',
		color: 'var(--color-dark-white)',
		cursor: 'pointer',
		transition: 'backgroundColor linear 300ms',
		'&:hover': {
			backgroundColor: 'var(--color-background-light-black)',
		},
	}),
	singleValue: base => ({
		...base,
		color: 'var(--color-dark-white)',
		fontWeight: 'normal',
	}),
	placeholder: base => ({
		...base,
		color: 'var(--color-dark-white)',
		fontWeight: 'normal',
	}),
}

export const CustomSelector = ({ name, id, placeholder }) => {
	return (
		<Select
			options={groupedOptions}
			styles={customStyles}
			name={name}
			id={id}
			instanceId={id}
			placeholder={placeholder}
		/>
	)
}
