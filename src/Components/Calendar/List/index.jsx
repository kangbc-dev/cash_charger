import React from "react";
import styled from "styled-components";
import { dayInfoAtom } from "../../../recoil/dayInfo";
import { cashInfoAtom } from "../../../recoil/cashInfo";
import { useRecoilState } from "recoil";

const S = {
	wrapper: styled.div`
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0 10px;

		& .items {
			display: flex;
			justify-content: space-between;

			width: 100%;
			& > span:nth-child(2) {
				color: red;
			}
		}
	`,
};

function CalendarList() {
	const [dayInfo, setDayInfo] = useRecoilState(dayInfoAtom);
	const [cashInfo, setCashInfo] = useRecoilState(cashInfoAtom);

	return (
		<S.wrapper>
			{cashInfo
				.filter((item) => {
					return (
						item.createdAt ===
						dayInfo.currentCheckpoint.clone().format("YYYY_MM_DD")
					);
				})
				.map((item, index) => (
					<div className="items" key={index}>
						<span>{item.category}</span>
						<span>{item.value}</span>
					</div>
				))}
		</S.wrapper>
	);
}

export default CalendarList;
