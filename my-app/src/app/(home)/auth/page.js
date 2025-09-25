import Auth from '@/components/Auth/Auth'
import Container from '@/components/common/Container/Container'

const Page = () => {
	return (
		<section className='my-1xl md:my-4xl'>
			<Container className='md:px-2lg'>
				<Auth />
			</Container>
		</section>
	)
}

export default Page
