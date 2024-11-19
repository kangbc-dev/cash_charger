import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import styled from "styled-components";

const Section = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: -1;
	background-color: #3139fb;
	background-image: url(https://arc.net/noise-light.png);
	width: 100vw;
	height: 100vh;
`;
function Test() {
	return <Section></Section>;
}

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
