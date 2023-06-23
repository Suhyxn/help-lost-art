import { selector } from "recoil";
import axios from "axios";

export const getAbyssDungeons = selector({
  key: "getAbyssDungeons",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        "https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons",
        {
          headers: {
            authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      const data = response.data;
      return data;
    } catch (err) {
      throw Error("Error");
    }
  },
});
