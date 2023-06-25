import styles from "./OverlayButton.module.scss";
interface ButtonTextType {
	hasArrow?: boolean;
	text: string;
	type: string;
}
const OverlayButton = (props: ButtonTextType) => {
	return <button className={styles.Button}>{props.text}</button>;
};

export default OverlayButton;
