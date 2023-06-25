import ButtonTextArrow from "../ButtonTextArrow/ButtonTextArrow";
import OverlayButton from "../OverlayButton/OverlayButton";
import styles from "./HeroBanner.module.scss";

const HeroBanner = () => {
	return (
		<div className={styles.HeroBanner}>
			<section className={styles.Section}>
				<h1 className={styles.Text}>
					Feel the power of nature and be part of the change.
				</h1>
				<ButtonTextArrow text={"Flip the switch"} type={"Overlay"} />
			</section>
		</div>
	);
};

export default HeroBanner;
