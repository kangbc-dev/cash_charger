import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dayInfoAtom } from "../../recoil/dayInfo";
import { cashInfoAtom } from "../../recoil/cashInfo";
import CalendarList from "./List";
//!!!!!!!!!!!!!!!!!!!!!!!!!! 후에 calendar 좌우로 1개씩 복제, 스와이프 기능 구현 예정

const S = {
	canSwipeCalanderArea: styled.div`
		display: flex;
		width: 300%;
		border: 1px solid red;
	`,
	CalenderWrapper: styled.table`
		width: 100%;
		border: 1px solid blue;
		margin-top: 35px; // 나중에 Router 자체에서 변경할수도있듬.

		td {
			width: calc(100% / 7); // 추가
			height: calc(100vw / 7);
			padding-top: 5px;
			border: 1px solid #000;
		}
		& > thead,
		tbody {
			text-align: center; //요일 구분 중앙정렬
			width: 100%; // 추가
			& td {
				position: relative;
				overflow: hidden;
				& .incomeExpenditure {
					position: absolute;
					right: 0;
					bottom: 0;
					& > .income {
						color: blue;
					}
					& > .expenditure {
						color: red;
					}
				}
			}
		}
		thead {
			font-size: 0.7rem;
			color: gray;
			border-bottom: 1px solid #d7d7d7;
			& td {
				height: 10px;
			}
		}
		tbody {
			font-size: 0.9rem;
		}
	`,
};

function Calendar() {
	const [dayInfo, setDayInfo] = useRecoilState(dayInfoAtom);
	const [cashInfo, setCashInfo] = useRecoilState(cashInfoAtom);

	//재사용 함수 선언
	/** 캘린더 생성 함수 */
	const calendarMakingFunction = (startMonth) => {
		const firstWeek = startMonth.clone().startOf("month").week(); //달력의 첫 주 선언
		const lastWeekPrv = startMonth.endOf("month").week(), //달력의 마지막 주 선언
			lastweek = lastWeekPrv === 1 ? 53 : lastWeekPrv;

		/** 달력 렌더링 배열 */
		const calendarJsx = [
			<thead>
				<tr>
					<td>일</td>
					<td>월</td>
					<td>화</td>
					<td>수</td>
					<td>목</td>
					<td>금</td>
					<td>토</td>
				</tr>
			</thead>,
		]; //기본 최상위 분류 틀 생성

		for (let week = firstWeek; week <= lastweek; week++) {
			calendarJsx.push(
				<tbody>
					<tr>
						{Array(7)
							.fill(0)
							.map((item, index) => {
								const day = dayInfo.currentCheckpoint
									.clone()
									.startOf("year")
									.week(week)
									.startOf("week")
									.add(index, "day");
								const today = dayInfo.today.clone();
								return (
									<td
										style={{
											color:
												day.format("MM월 DD일") === today.format("MM월 DD일")
													? "red"
													: "inherit",
										}}
									>
										{day.format("DD일")}
										<div className="incomeExpenditure">
											<div className="income">
												<span>
													{cashInfo
														.filter((item) => {
															return item.createdAt ===
																day.clone().format("YYYY_MM_DD") &&
																item.incomeExpenditure === "income"
																? true
																: false;
														})
														.reduce((acc, cur) => {
															return +acc?.value || acc + +cur.value;
														}, 0) || ""}
												</span>
											</div>
											<div className="expenditure">
												<span>
													{cashInfo
														.filter((item) => {
															return item.createdAt ===
																day.clone().format("YYYY_MM_DD") &&
																item.incomeExpenditure === "expenditure"
																? true
																: false;
														})
														.reduce(
															(acc, cur) => +acc?.value || acc + +cur.value,
															0
														) || ""}
												</span>
											</div>
										</div>
									</td> //각 요일들
								);
							})}
					</tr>
				</tbody>
			);
		}
		return calendarJsx;
	};
	return (
		<>
			<S.CalenderWrapper>
				{calendarMakingFunction(
					dayInfo.currentCheckpoint.clone().startOf("month").add(0, "month")
				)}
			</S.CalenderWrapper>
			<CalendarList />
		</>
	);
}

export default Calendar;
