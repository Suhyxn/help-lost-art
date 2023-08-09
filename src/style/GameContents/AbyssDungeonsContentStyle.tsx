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
                <>1. 낙하지점이 생기면 밖으로 빠졌다가 들어온다.</>
              ) : (
                <>
                  1. 본인에게 빨간 장판이 생길 시 파티원과 겹치지 않도록 떨어져
                  준다. <br /> <br /> <br /> <br /> <br />
                  2. 마력 핵 문구가 나온 이후 화면이 어두워지면 주황 구슬 네
                  개가 생긴다. <br /> <br />- 2. 파티원들과 구슬 앞으로 모여
                  보스를 유인하여 구슬을 터트리게 만든다.
                </>
              )}
            </>
          ) : (
            <></>
          )}
          {AbyssDungeonsFirst.Name === "비틀린 군주의 회랑" ? (
            <>
              {firstAfterVisible ? (
                <>
                  1. 비숍과 룩이라는 총 2마리 보스로 구성되어 있다. <br />
                  <br />- 2. 비숍과 룩은 한 마리만 먼저 잡을 경우 남은 보스가
                  광폭화가 진행되니 최대한 동시에 잡을 수 있도록 한다. <br />
                  <br /> <br /> <br /> <br />
                  2. 강력한 공격이라는 문구가 뜨면 한 명을 제외한 파티원 3명에게
                  모두 장판이 생긴다. <br /> <br />
                  - 2. 장판이 생긴다면 구석으로 자리를 피해 준다. <br /> <br />-
                  3. 장판이 없다면 룩 (크기가 큰) 이 던진 구체에 비숍 ( 크기가
                  작은 ) 이 맞을 수 있도록 사이 벽들을 부셔 준 뒤 비숍 뒤로
                  숨는다. <br /> <br />- 4. 날라오는 구체를 나 대신 비숍이 맞을
                  수 있도록 한다.
                </>
              ) : (
                <>
                  1. 환영의 검 소환 문구가 뜨면 곱삼 자리로 이동한다. <br />
                  <br />- 2. 기다리다가 검이 나타나면 시계 방향으로 돌아 주면서
                  파티원 순서대로 검을 먹어 준다. <br /> <br />- 3. 검을 먹을
                  때마다 우측 하단에 디버프가 생기니 파티 일 번을 제외한
                  파티원들은 디버프가 사라질 때마다 차례대로 검을 먹어준다.
                  <br /> <br />- 4.검을 먹은 이후 가운데 보스에게 무력화 스킬을
                  사용한다. <br /> <br /> <br /> <br /> <br />
                  2. 붉은 막이 형성되면 이후 붉은 장판을 피해 무력화 스킬을
                  사용해 준다. <br /> <br /> <br /> <br /> <br />
                  3. 두 손을 모았다가 전방으로 찌르면 회전검이 날라 오는데
                  데미지가 매우 강하니 회전검 사이로 피해 준다.
                </>
              )}
            </>
          ) : (
            <></>
          )}
          {AbyssDungeonsFirst.Name === "탄식의 길" ? (
            <>
              {firstAfterVisible ? (
                <>
                  1. 마기 방출 시 내부 또는 외부로 랜덤으로 회전한다. <br />
                  <br />- 2. 회전하지 않는 경우도 있다. <br /> <br />- 3. 내부일
                  경우 내부로 들어가서 방향에 맞춰 돌아 레이저를 피해 준다.
                  <br /> <br />- 4. 외부 표식이 있을 경우 외각 모서리에서 빨간
                  발판을 빼 준 이후 방향에 맞춰 돌아 레이저를 피해 준다.
                </>
              ) : (
                <>
                  1. 폭주 대사가 나온 이후 무력화 게이지가 생기면 낮춰 준다.
                  <br /> <br /> <br /> <br /> <br />
                  2. 마검 대사가 나오면 곱삼 자리에 가서 보스와 거리를 두고
                  기다린 이후 노란 구슬을 세 개 먹어 장판을 생성해 준다. <br />
                  <br />- 2. 노란 구슬을 먹을 때 빨간 구슬을 실수로 먹을 경우
                  노란 구슬 개수가 초기화된다. <br /> <br /> <br /> <br />
                  <br /> 3. 장판이 생성된 이후 빨간 구슬이 나타나면 장판을
                  이용하여 구슬들을 지워 준다.
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
                  1. '조심하게' 대사 이후 죽음의 시선 스택이 쌓여 5스택이 쌓이면
                  즉사하게 된다. <br /> <br />- 2. 파티 번호 차례대로 1번부터
                  4번까지 노란 구슬을 먹어 스택을 지운다.
                </>
              ) : (
                <>
                  1. 순간이동을 할 경우 이후 보스 안쪽 안전지대로 이동한다.
                  <br /> <br /> <br /> <br /> <br />
                  2. 피가 1이 되면 빨간색 또는 흰색 연기를 방출한다. <br />
                  <br />- 2. 곱삼 자리에 가서 방출 색상과 같았던 구슬을 먹어
                  준다. <br /> <br />- 3. 모두가 성공했을 경우 두 번 반복하면
                  클리어하게 된다.
                </>
              )}
            </>
          ) : (
            <></>
          )}
          {AbyssDungeonsSecond.Name === "몽환궁전 힐데브리뉴" ? (
            <>
              {secondAfterVisible ? (
                <>
                  1. 보스 주위에 검은 구슬이 돌면서 장판이 생기면 구슬 회전
                  방향에 맞춰 4번 돌아 준다. <br /> <br /> <br /> <br /> <br />
                  2. 파도가 오면 거울을 통해 피해 준다. <br /> <br />- 2. 거울은
                  같은 색상으로 이동하며 파도 반대편 색상 거울로 이동해 주면
                  된다. <br /> <br />- 3. 보라색 거울은 맵 중앙으로 이동하니
                  이용할 시 타이밍에 주의해 줘야 한다. <br /> <br /> <br />
                  <br /> <br />
                  3. 맵이 기울어진 이후 돌을 피해 아래 분쇄기에 닿을 시 큰
                  대미지가 들어오니 최대한 걸리지 않도록 돌을 피해 준다. <br />
                  <br />- 2. 특정 타켓 문구가 뜬 이후 빨간 장판이 생기면
                  아브렐슈드 옆에 붙어 떨어지는 운석을 아브렐슈드에게 맞춰 준다.
                </>
              ) : (
                <>
                  1. 거품을 모았다가 발사할 시 발 밑에 장판이 생기는데 외부에
                  장판을 빼 주고 공격한다. <br /> <br /> <br /> <br /> <br />
                  2. 큰 몬스터(에페르니아)가 나와 아브렐슈드를 공격할 시 무력화
                  스킬을 넣어 준다. <br /> <br /> <br /> <br /> <br />
                  3. 동료들의 힘 문구가 뜨면 파티원 한 명에게는 X자가 표시되고
                  나머지 파티원들에게는 빛의 총이 생긴다. <br /> <br />- 2.
                  적당한 거리를 두고 X 표식이 붙은 파티원에게 평타를 통해 방향을
                  맞춰 주고 하늘에서 운석이 떨어지면 빠르게 빠져 준다. <br />
                  <br />- 3. 노란색 장판이 생길 경우에는 X 표식인 사람이 장판
                  안으로 들어가 준다. <br /> <br />- 4. 너무 가까이 붙을 경우
                  빛의 총 인식이 되지 않으니 주의해야 한다.
                </>
              )}
            </>
          ) : (
            <></>
          )}
          {AbyssDungeonsSecond.Name === "추락한 긍지의 용광로" ? (
            <>
              {secondAfterVisible ? (
                <>
                  1. 캐릭터 주변에 빨간 원이 생길 경우 파티원과 겹치지 않도록 빼
                  준다. <br /> <br /> <br /> <br /> <br />
                  2. 와이번을 소환한다는 문장이 나오면 도발의 허수아비를 통해
                  최대한 빨리 잡아 준다. <br /> <br /> <br /> <br /> <br />
                  3. 극한 상태를 강화한다는 문장이 나오면 상단 체력 밑에 있는
                  보라색 바를 확인하며 무력화 게이지를 낮춰 준다.
                </>
              ) : (
                <>
                  1. 피막이 형성 될 경우 공격시 반격 대미지가 들어오니 공격을
                  멈춘다. <br /> <br /> <br /> <br /> <br /> 2. 소환체 문구가 뜰
                  경우 보스의 모으고 있는 구체 에너지 색깔을 확인하여 동일한
                  색깔 분신을 잡고 영역 안에 들어가 준다.
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
  width: 1460px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  float: left;
  justify-content: space-around;
`;

const ButtonBox = styled.div``;

const GatewayButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: 2px solid #40444f;
  width: 250px;
  padding: 12px;
  font-size: 16px;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
`;

const GateWayContent = styled.div`
  width: 580px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 50px;
  text-align: center;
`;

export default AbyssDungeonsContentStyle;
