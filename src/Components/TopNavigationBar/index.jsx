import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { dayInfoAtom } from "../../recoil/dayInfo";
import { IoIosRefresh } from "react-icons/io";

const S = {
	Wrapper: styled.div`
		position: fixed;
		top: 0;
		left: 0;

		width: 100%;
		height: 36px;
		border: 1px solid red;

		& > .calendarSwitch {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);

			display: flex;
			align-items: center;
			width: fit-content;
			& > .calendarRefresh {
				position: absolute;
				right: 130%;
				top: 50%;
				transform: translateY(-50%);
			}
			& > span {
				display: flex;
				align-items: center;
				vertical-align: middle;
			}
			& > div {
				cursor: pointer;
			}
		}
	`,
};

function TopNavigationBar() {
	const [dayInfo, setDayInfo] = useRecoilState(dayInfoAtom);
	return (
		<S.Wrapper>
			<div className="calendarSwitch">
				<div
					className="calendarRefresh"
					onClick={() => {
						setDayInfo((current) => {
							return {
								...current,
								currentCheckpoint: current.today.clone(),
							};
						});
					}}
				>
					<IoIosRefresh />
				</div>
				<div
					className="canlendarLeftAngle"
					onClick={() => {
						setDayInfo((current) => {
							return {
								...current,
								currentCheckpoint: current.currentCheckpoint
									.clone()
									.add(-1, "month"),
							};
						});
					}}
				>
					<FaAngleLeft />
				</div>
				<span>{dayInfo.currentCheckpoint.format("MM")}</span>
				<div
					className="canlendarRightAngle"
					onClick={() => {
						setDayInfo((current) => {
							return {
								...current,
								currentCheckpoint: current.currentCheckpoint
									.clone()
									.add(+1, "month"),
							};
						});
					}}
				>
					<FaAngleRight />
				</div>
			</div>
		</S.Wrapper>
	);
}

export default TopNavigationBar;
