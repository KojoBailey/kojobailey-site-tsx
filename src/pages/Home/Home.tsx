import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Spacer from '@/components/Spacer'

import Hero from './Hero'

function Home() {
	return (
	<>
		<SiteHeader />

		<Hero />
		
		<Spacer height="500px" />

		<SiteFooter />
	</>
	)
}

export default Home
