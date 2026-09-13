import styles from './SiteHeader.module.scss'

function SiteHeader() {
	return (
		<section className={styles.siteHeader}>
			<div className={styles.left}>
				<div className={styles.sitename}>
					<a href="/">KojoBailey.me</a>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.blog}>
					<a href="https://kojobailey.me" target="_blank" rel="noreferrer">
						blog
					</a>
				</div>
			</div>
		</section>
	)
}

export default SiteHeader
