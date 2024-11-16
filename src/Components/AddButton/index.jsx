import React from "react";
import styled from "styled-components";
import { FaCirclePlus } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { renderStateAtom } from "../../recoil/renderState";

const S = {
	wrapper: styled.button`
		position: fixed;
		bottom: 120px;
		right: 25px;

		width: 35px;
		height: 35px;

		background-color: rgb(120, 0, 255);
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;

		padding: 0;
		& > svg {
			width: 100%;
			height: 100%;
			color: white;
		}
	`,
};

function AddButton() {
	const [renderState, setRenderState] = useRecoilState(renderStateAtom);
	return (
		<S.wrapper
			onClick={() => {
				setRenderState((current) => {
					return { ...current, clickedAddButton: !current.clickedAddButton };
				});
			}}
		>
			<FaCirclePlus />
		</S.wrapper>
	);
}

export default AddButton;
