import styles from './SiteHeader.module.scss'

function SiteHeader() {
	return (
		<section className={styles.siteHeader}>
			<div className={styles.sectionButtons}>
				<div className={styles.sectionButton}>
					<a href="#education">Education</a>
				</div>
				<div className={styles.sectionButton}>
					<a href="#projects">Projects</a>
				</div>
				<div className={styles.sectionButton}>
					<a href="#work-experience">Work Experience</a>
				</div>
				<div className={styles.sectionButton}>
					<a href="#personal-experience">Personal Experience</a>
				</div>
				<div className={styles.sectionButton}>
					<a href="#skills">Skills</a>
				</div>
			</div>
		</section>
	)
}

export default SiteHeader
