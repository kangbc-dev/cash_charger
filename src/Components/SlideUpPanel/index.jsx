import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { renderStateAtom } from "../../recoil/renderState";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";

const S = {
	wrapper: styled.div`
		position: fixed;
		left: 0;
		top: ${(props) => (props.active ? "0%" : "100%")};
		width: 100vw;
		height: 100vh;

		background-color: white;

		transition: top 0.5s ease-in-out;

		& > button {
			width: 35px;
			height: 35px;
			& > svg {
				width: 100%;
				height: 100%;
			}
		}
	`,
};

function SlideUpPanel() {
	const [renderState, setRenderState] = useRecoilState(renderStateAtom);
	const { register, watch, handleSubmit, reset, setValue } = useForm();
	return (
		<S.wrapper active={renderState.clickedAddButton}>
			<button
				onClick={() => {
					setRenderState((current) => {
						return { ...current, clickedAddButton: !current.clickedAddButton };
					});
				}}
			>
				<IoIosClose />
			</button>
			<form
				action=""
				onChange={() => {
					console.log(watch());
				}}
				onSubmit={(e) => {
					e.preventDefault();
					console.log("어딜 전송하려고?");
				}}
			>
				<input type="text" {...register("value")} />
				<input type="submit" value="전송" />
			</form>
		</S.wrapper>
	);
}

export default SlideUpPanel;
