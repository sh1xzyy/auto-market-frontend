import AIHelperIntro from '@/components/AIHelperIntro/AIHelperIntro'
import MainFilters from '@/components/MainFilters/MainFilters'

export default function Home() {
	return (
		<>
			<section className='py-2sm mt-[405px]'>
				<MainFilters />
			</section>
			<section className='py-2sm'>
				<AIHelperIntro />
			</section>
		</>
	)
}
