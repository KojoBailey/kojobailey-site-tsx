import styles from './SiteFooter.module.scss'

function SiteFooter() {
	return (
		<section className={styles.siteFooter}>
			<div className={styles.copyright}>
				© Kojo Bailey 2026
			</div>
		</section>
	)
}

export default SiteFooter
