import Link from 'next/link'
import Container from '../common/Container/Container'
import { BiMessageDetail } from 'react-icons/bi'
import Logo from './Logo'

const AIHelperIntro = () => {
	return (
		<Container>
			<div className='flex flex-col gap-2lg p-2lg w-full bg-background-light-black rounded-lg md:flex-row md:items-center md:p-xl'>
				<div className='flex flex-col justify-center gap-md'>
					<div className='flex items-center gap-md'>
						<Logo />
						<span className='p-sm rounded-md text-sm font-bold gap-md bg-black'>
							Beta
						</span>
					</div>

					<p className='text-md font-medium'>
						Ich bin dein persönlicher KI-Guide! Mit meinen Antworten findest du
						schnell & sicher durch den Dschungel der Angebote.
					</p>
				</div>

				<Link
					className='flex justify-center items-center w-full gap-2sm rounded-md px-2md py-2sm bg-light-violet text-md transition-colors linear duration-300 md:max-w-[231px] hover:bg-dark-violet'
					href='/mobee'
				>
					<BiMessageDetail size={20} />
					<span>Wie kann ich dir helfen?</span>
				</Link>
			</div>
		</Container>
	)
}

export default AIHelperIntro
