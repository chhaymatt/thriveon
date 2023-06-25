import styles from "./Card.module.scss";

interface CardType {
	heading: string;
	description: string;
	icon: string;
}
const Card = (props: CardType) => {
	return (
		<div className={styles.Card}>
			<img src={props.icon} className={styles.Icon}></img>
			<div className={styles.TextRow}>
				<h4 className={styles.Heading}>{props.heading}</h4>
				<p className={styles.Description}>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
