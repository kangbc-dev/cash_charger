import React from "react";
import styled from "styled-components";

const BottomNavigationBarBox = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;

	display: flex;
	justify-content: space-between;
	gap: 20px;

	width: 100vw;
	height: calc(((100vw - 80px) / 5) + 30px);
	border: 1px solid #000;

	padding-bottom: 30px;

	& > div {
		flex: 1;

		display: flex;
		justify-content: center;
		align-items: center;

		height: 100%;
		border: 1px solid blue;
		& > div {
			width: 50%;
			height: 50%;
			border: 1px solid #000;
			border-radius: 10%;
		}
	}
`;

function BottomNavigationBar() {
	return (
		<BottomNavigationBarBox>
			{Array(5)
				.fill(0)
				.map((_, index) => (
					<div>
						<div></div>
					</div>
				))}
		</BottomNavigationBarBox>
	);
}

export default BottomNavigationBar;
