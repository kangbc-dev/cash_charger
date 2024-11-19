import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { renderStateAtom } from "../../recoil/renderState";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { cashInfoAtom } from "../../recoil/cashInfo";
import moment from "moment";

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
	addItem: styled.form`
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
		& > .cashInput {
			position: relative;
			width: 70%;
			&::before {
				position: absolute;
				left: -30px;
				top: 0;

				display: block;
				content: "\\20A9";

				font-size: 2rem;
			}
			& > .value {
				width: 100%;
				height: 32px;
			}
		}
		& > .buttons {
			display: flex;
			margin: 30px auto 0;
		}
	`,
};

function SlideUpPanel() {
	const [renderState, setRenderState] = useRecoilState(renderStateAtom);
	const [cashInfo, setCashInfo] = useRecoilState(cashInfoAtom);
	const { register, watch, handleSubmit, reset, setValue } = useForm();

	const onSubmit = (data) => {
		setCashInfo((current) => {
			return [
				...current,
				{
					createdAt: moment().format("YYYY_MM_DD"),
					incomeExpenditure: data.incomeExpenditure,
					category: data.category,
					value: +data.value,
				},
			];
		});
		console.log(data);
		console.log("등록됨");
		setRenderState((current) => {
			return { ...current, clickedAddButton: !current.clickedAddButton };
		});
		reset();
	};

	// 모든 필드의 값 변화 감지
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			console.log("모든 필드 값:", value);
			console.log("변경된 필드 이름:", name);
			console.log("변경 타입:", type);
		});

		return () => subscription.unsubscribe();
	}, [watch]);
	useEffect(() => {
		console.log(cashInfo);
	}, []);

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
			<S.addItem action="submit" onSubmit={handleSubmit(onSubmit)}>
				<div className="cashInput">
					<input type="number" {...register("value")} className="value" />
				</div>
				<select name="inEx" id="inEx" {...register("incomeExpenditure")}>
					<option value="income">수입</option>
					<option value="expenditure">지출</option>
				</select>
				<select name="category" id="category" {...register("category")}>
					<option value="교통비">교통비</option>
					<option value="식비">식비</option>
					<option value="기타">기타</option>
				</select>
				<input type="submit" value="등록" />
			</S.addItem>
		</S.wrapper>
	);
}

export default SlideUpPanel;
