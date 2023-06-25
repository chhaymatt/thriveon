import Card from "../Card/Card";
import styles from "./Section.module.scss";

import House from "./House.svg";
import Robot from "./Robot.svg";
import WindTurbine from "./WindTurbine.svg";
import People from "./People.svg";
import ImageTextContent from "../ImageTextContent/ImageTextContent";

const Section = () => {
	return (
		<section className={styles.Section}>
			<section className={styles.SectionText}>
				<h3>
					Thriveon is a 100% carbon-neutral energy provider that
					reinvest profits into sustainable initiatives.
				</h3>
			</section>
			<section className={styles.CardList}>
				<Card
					heading={"Sourced from unlimited power"}
					description={
						"Combining 47% solar, 29% wind, and 24% hydro power harnesses the energy of nature with minimal harm to the planet."
					}
					icon={WindTurbine}
				/>
				<Card
					heading={"Reinvesting in earth"}
					description={
						"Our profits support and restore the health of the planet. Initiatives such as reforestation, reducing carbon emissions, and contributing to the green transition."
					}
					icon={House}
				/>
				<Card
					heading={"More time for you"}
					description={
						"With our 100% local customer service available 8am-12am straight from the app, you’re guaranteed you won’t be left on read."
					}
					icon={People}
				/>
				<Card
					heading={"Automation-neutral"}
					description={
						"As a leading force in the green energy industry, we’re committed to a smooth transition as a result of the automation advancements."
					}
					icon={Robot}
				/>
			</section>
			<ImageTextContent />
		</section>
	);
};

export default Section;
