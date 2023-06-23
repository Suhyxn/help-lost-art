import { atom } from "recoil";

export type AbyssDungeonType = {
  name: string;
  description: string;
  minCharacterLevel: number;
  minItemLevel: number;
  areaname: string;
  startTime: string;
  endTime: string;
  image: string;
  rewardItem: [RewardItemType];
};

export type RewardItemType = {
  name: string;
  icon: string;
  grade: string;
  startTimes: [string];
};

export default atom<AbyssDungeonType>({
  key: "AbyssDungeons",
  default: {
    name: "",
    description: "",
    minCharacterLevel: 0,
    minItemLevel: 0,
    areaname: "",
    startTime: "",
    endTime: "",
    image: "",
    rewardItem: [
      {
        name: "",
        icon: "",
        grade: "",
        startTimes: [""],
      },
    ],
  },
});
