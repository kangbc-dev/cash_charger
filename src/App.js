import { RecoilRoot } from "recoil";
import BottomNavigationBar from "./Components/BottomNavigationBar";
import Router from "./Router";
import GlobalStyle from "./styled/GlobalStyle";
import TopNavigationBar from "./Components/TopNavigationBar";
import AddButton from "./Components/AddButton";
import SlideUpPanel from "./Components/SlideUpPanel";

function App() {
	return (
		<>
			<RecoilRoot>
				<GlobalStyle />
				<Router />
				<TopNavigationBar />
				<BottomNavigationBar />
				<AddButton />
				<SlideUpPanel />
			</RecoilRoot>
		</>
	);
}

export default App;
