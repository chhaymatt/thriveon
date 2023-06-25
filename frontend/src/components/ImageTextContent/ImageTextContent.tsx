import ButtonTextArrow from "../ButtonTextArrow/ButtonTextArrow";
import OverlayButton from "../OverlayButton/OverlayButton";
import styles from "./ImageTextContent.module.scss";

const ImageTextContent = () => {
	return (
		<div className={styles.ImageTextContent}>
			<div className={styles.Text}>
				<h1>We believe in investing for everyone.</h1>
				<p>
					Our commitment to sustainability and environmental
					stewardship sets us apart from other energy providers. By
					reinvesting profits into renewable energy, you are helping
					to build a brighter, cleaner, and more sustainable future
					for all. As a Thriveoner, our app allows you to easily track
					your investment into the planet.
				</p>
				<OverlayButton text={"Learn more"} type={"Primary"} />
			</div>
			<img className={styles.Image}></img>
		</div>
	);
};

export default ImageTextContent;
