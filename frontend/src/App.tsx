import HeroBanner from "./components/HeroBanner/HeroBanner";
import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Section/Section";

function App() {
	return (
		<div className="App">
			<Navigation></Navigation>
			<HeroBanner></HeroBanner>
			<Section></Section>
		</div>
	);
}

export default App;
