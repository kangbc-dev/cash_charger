import React from "react";
import styled from "styled-components";
import Calendar from "../../Components/Calendar";

const MainBox = styled.div`
	border: 1px solid #000;
`;

function Main() {
	return (
		<MainBox>
			<h1>hello</h1>
			<Calendar />
		</MainBox>
	);
}

export default Main;
