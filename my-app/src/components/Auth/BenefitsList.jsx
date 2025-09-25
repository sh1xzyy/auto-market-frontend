import { GrFormCheckmark } from 'react-icons/gr'

const BenefitsList = ({ adventures, title }) => {
	return (
		<div className='p-3xl'>
			<h3 className='text-xl font-bold mb-2lg md:max-w-[75%]'>{title}</h3>

			<ul className='flex flex-col gap-md'>
				{adventures?.map((adventure, i) => (
					<li className='flex items-center gap-md' key={i}>
						<GrFormCheckmark color='var(--color-light-green)' size={24} />
						<span className='font-bold'>{adventure}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default BenefitsList
