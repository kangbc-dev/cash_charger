import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "cashInfoAtom-persist", // 로컬 스토리지에 저장될 때 사용될 키
	storage: localStorage, // 사용할 저장소, 여기서는 localStorage를 사용
});

export const cashInfoAtom = atom({
	key: "cashInfoAtom",
	default: [],
	effects_UNSTABLE: [persistAtom], // atom에 persistAtom 효과를 추가하여 지속성을 부여
});
