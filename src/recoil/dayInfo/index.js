import moment from "moment";
import { atom } from "recoil";

const today = moment();

/** moment 라이브러리 날짜 정보 담는 atom */
export const dayInfoAtom = atom({
	key: "dayInfoAtom",
	default: {
		today: today.clone(),
		currentCheckpoint: today.clone(),
	},
});
