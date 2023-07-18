import React, { useState } from "react";
import styled from "styled-components";

function AbyssDungeonsContentStyle({
  AbyssDungeonsFirst,
  AbyssDungeonsSecond,
}: AbyssDungeonsStyleProps) {
  const [firstAfterVisible, setFirstAfterVisible] = useState(true);
  const [secondAfterVisible, setSecondAfterVisible] = useState(true);

  return (
    <Container>
      <ButtonContainer>
        <ButtonBox>
          <GatewayButton
            onClick={() => {
              setFirstAfterVisible(true);
            }}
          >
            1관문
          </GatewayButton>
          <GatewayButton
            onClick={() => {
              setFirstAfterVisible(false);
            }}
          >
            2관문
          </GatewayButton>
        </ButtonBox>
        <ButtonBox>
          <GatewayButton
            onClick={() => {
              setSecondAfterVisible(true);
            }}
          >
            1관문
          </GatewayButton>
          <GatewayButton
            onClick={() => {
              setSecondAfterVisible(false);
            }}
          >
            2관문
          </GatewayButton>
        </ButtonBox>
      </ButtonContainer>
      <ContentBox>
        <GateWayContent>
          {AbyssDungeonsFirst.Name === "마수의 골짜기" ? (
            <>
              {firstAfterVisible ? (
                <>낙하지점이 생기면 밖으로 빠졌다가 들어온다.</>
              ) : (
                <>
                  본인에게 빨간 장판이 생길 시 파티원과 겹치지 않도록
                  떨어져준다. <br /> 마력핵 문구가 나온 이후 화면이 어두워지면
                  주황 구슬 네 개가 생긴다 파티원들과 구슬 앞으로 모여 보스를
                  유인하여 구슬을 터트리게 만든다{" "}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </GateWayContent>
        <GateWayContent>
          {AbyssDungeonsSecond.Name === "사령술사의 근원" ? (
            <>
              {secondAfterVisible ? (
                <>
                  '조심하게' 대사 이후 죽음의 시선 스텍이 쌓여 5스택이 쌓이면
                  즉사하게 된다. <br /> 파티 번호 차례대로 1번부터 4번까지 노란
                  구슬을 먹어 스택을 지운다.
                </>
              ) : (
                <>
                  순간이동을 할 경우 이후 보스 안쪽 안전지대로 이동한다. 피가
                  1이 되면 빨간색 또는 흰색 연기를 방출하니 곱삼 자리에 가서
                  방출 색상과 같았던 구슬을 먹어 준다. 모두가 성공했을 경우 두
                  번 반복하면 클리어하게 된다.
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </GateWayContent>
      </ContentBox>
    </Container>
  );
}

type AbyssDungeonsStyleProps = {
  AbyssDungeonsFirst: AbyssDungeonsType;
  AbyssDungeonsSecond: AbyssDungeonsType;
};

type AbyssDungeonsType = {
  Name: string;
  Description: string;
  MinCharacterLevel: number;
  MinItemLevel: number;
  AreaName: string;
  StartTime: string;
  EndTime: string;
  Image: string;
  RewardItem: AbyssDungeonsRewardItem[];
};

type AbyssDungeonsRewardItem = {
  Name: string;
  Icon: string;
  Grade: string;
  StartTime: null;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  float: left;
`;

const ButtonBox = styled.div``;

const GatewayButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #40444f;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const GateWayContent = styled.div`
  width: 400px;
  color: #ffffff;
  margin-top: 40px;
  margin-left: 90px;
  margin-bottom: 50px;
`;

export default AbyssDungeonsContentStyle;
