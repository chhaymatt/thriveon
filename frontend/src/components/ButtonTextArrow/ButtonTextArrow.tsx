import styles from "./ButtonTextArrow.module.scss";
interface ButtonTextType {
	hasArrow?: boolean;
	text: string;
	type: string;
}
const ButtonTextArrow = (props: ButtonTextType) => {
	return <button className={styles.ButtonTextArrow}>{props.text}</button>;
};

export default ButtonTextArrow;
