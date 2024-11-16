import { atom } from "recoil";

export const renderStateAtom = atom({
	key: "renderStateAtom",
	default: {
		clickedAddButton: false,
	},
});
