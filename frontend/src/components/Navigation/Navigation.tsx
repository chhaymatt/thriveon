import OverlayButton from "../OverlayButton/OverlayButton";
import styles from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<nav className={styles.Navigation}>
			<section className={styles.Logo}>Thriveon</section>
			<section>
				<a className={`${styles.Link} ${styles.Link__active}`} href="#">
					Home
				</a>
				<a className={styles.Link} href="#">
					Manifesto
				</a>
				<a className={styles.Link} href="#">
					Projects
				</a>
				<a className={styles.Link} href="#">
					News
				</a>
				<OverlayButton text={"Flip the switch"} type="OverlayDark" />
			</section>
		</nav>
	);
};

export default Navigation;
