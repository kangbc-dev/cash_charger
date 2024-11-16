import React from "react";
import styled from "styled-components";

const S = {
	Wrapper: styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 36px;
		border: 1px solid red;
	`,
};

function TopNavigationBar() {
	return <S.Wrapper></S.Wrapper>;
}

export default TopNavigationBar;
