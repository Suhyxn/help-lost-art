import React from "react";
import { useRecoilValue } from "recoil";
import { getAbyssDungeons } from "api";
import HomeHeader from "components/Header";
import AbyssDungeonsStyle from "style/GameContents/AbyssDungeonsStyle";

function AbyssDungeons() {
  const useAbyssDungeons = useRecoilValue(getAbyssDungeons);

  const AbyssDungeonsFirst = useAbyssDungeons[0];
  const AbyssDungeonsSecond = useAbyssDungeons[1];

  return (
    <>
      <HomeHeader />
      <AbyssDungeonsStyle
        AbyssDungeonsFirst={AbyssDungeonsFirst}
        AbyssDungeonsSecond={AbyssDungeonsSecond}
      />
    </>
  );
}

export default AbyssDungeons;
