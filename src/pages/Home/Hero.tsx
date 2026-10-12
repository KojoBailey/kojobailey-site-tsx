import styles from './Hero.module.scss'
import Spacer from '@/components/Spacer'
import WhatsAppSvg from '@/assets/whatsapp.svg?react'
import EmailSvg from '@/assets/email.svg?react'
import GitHubSvg from '@/assets/github.svg?react'
import YouTubeSvg from '@/assets/youtube.svg?react'
import LinkedInSvg from '@/assets/linkedin.svg?react'
import BlogSvg from '@/assets/blog.svg?react'
import Photo from '@/assets/photo.jpg'

const icons = {
	whatsapp: WhatsAppSvg,
	email: EmailSvg,
	github: GitHubSvg,
	youtube: YouTubeSvg,
	linkedin: LinkedInSvg,
	blog: BlogSvg,
}

type IconName = keyof typeof icons

type IconProps = SVGProps<SVGSVGElement> & {
	name: IconName
	size?: number
}

function Icon({ name, size = 60, href, ...props }: IconProps) {
	const Svg = icons[name]
	return (
		<div className={styles.platformButton}>
			<a href={href} target="_blank">
				<Svg width={size} height={size} fill="white" {...props} />
			</a>
		</div>
	)
}

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.left}>
				<div className={styles.photo}>
					<img src={Photo} />
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.name}>
					Kojo Bailey
				</div>
				<div className={styles.location}>
					<a href="https://maps.app.goo.gl/pVHa4uupsZ8WvooH8" target="_blank">
						 Liverpool, Merseyside, United Kingdom
					</a>
				</div>
				<Spacer height="24px" />
				<div className={styles.platformButtons}>
					<Icon name="whatsapp" />
					<Icon name="email" />
					<Icon name="github" href="https://github.com/KojoBailey" />
					<Icon name="youtube" href="https://www.youtube.com/@KojoBailey" />
					<Icon name="linkedin" href="https://www.linkedin.com/in/kojo-bailey/" />
					<Icon name="blog" href="https://kojobailey.me" />
				</div>
				<Spacer height="24px" />
				<div className={styles.introduction}>
					Computer Science undergraduate with an 85% first-year average,
					developing a compiler, building a game engine, and reverse engineering games
					to create tools for a modding community.
				</div>
			</div>
		</section>
	)
}

export default Hero
