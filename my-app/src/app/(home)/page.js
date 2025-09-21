import AIHelperIntro from '@/components/AIHelperIntro/AIHelperIntro'
import MainFilters from '@/components/MainFilters/MainFilters'
import MainImage from '@/components/MainImage/MainImage'

export default function Home() {
	return (
		<>
			<MainImage
				src='/mainImage/main.jpg'
				alt='go mobile. find whats best for you - on germans biggest vehicle marketplace'
			/>
			<section className='py-2sm mt-[405px]'>
				<MainFilters />
			</section>
			<section className='py-2sm'>
				<AIHelperIntro />
			</section>
		</>
	)
}
