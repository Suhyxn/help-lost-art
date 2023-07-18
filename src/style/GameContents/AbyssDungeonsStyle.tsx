import React from "react";
import styled from "styled-components";
import AbyssDungeonsContentStyle from "./AbyssDungeonsContentStyle";

function AbyssDungeonsStyle({
  AbyssDungeonsFirst,
  AbyssDungeonsSecond,
}: AbyssDungeonsStyleProps) {
  return (
    <Container>
      <AbyssNameContainer>
        <AbyssName>{AbyssDungeonsFirst.Name}</AbyssName>
        <AbyssName>{AbyssDungeonsSecond.Name}</AbyssName>
      </AbyssNameContainer>
      <ImageContainer>
        <ImageSquare Image={AbyssDungeonsFirst.Image} />
        <ImageSquare Image={AbyssDungeonsSecond.Image} />
      </ImageContainer>
      <AbyssDungeonsContentStyle
        AbyssDungeonsFirst={AbyssDungeonsFirst}
        AbyssDungeonsSecond={AbyssDungeonsSecond}
      />
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

const Container = styled.div``;

const AbyssNameContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const AbyssName = styled.div`
  color: #ffffff;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  height: 340px;
`;

const ImageSquare = styled.div<{ Image: string }>`
  width: 700px;
  height: 260px;
  background-color: #40444f;
  float: left;
  margin-left: 90px;
  margin-bottom: 50px;
  background-image: url(${(props) => props.Image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default AbyssDungeonsStyle;
