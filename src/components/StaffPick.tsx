import styled from "styled-components";

import Author from "./Author";
import GlobalStyles from "../styles/GlobalStyles";

import { PiStarFourFill } from "react-icons/pi";
import type { DevToArticle } from "../data/data";
import { formatDate } from "../utilities/constant";

export const AsideArticle = styled.article`
  padding: 0.625rem 0;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin: 0.25rem 0 0 0;
`;

export const Stats = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.813rem;
  color: #6b7280;
`;

interface StaffPickProps {
  item: DevToArticle;
  index: number;
}

function StaffPick({ item, index }: StaffPickProps) {
  return (
    <>
      <GlobalStyles />
      <AsideArticle>
        <div style={{ flex: "1 1 0%" }}>
          <Author
            index={index}
            item={item}
            width={22}
            height={25}
            src="staff"
          />

          <>
            <Title>{item.title}</Title>
          </>

          <Stats>
            {index === 1 && <PiStarFourFill color="#ffc017" />}
            <span>{formatDate(item.created_at)}</span>
          </Stats>
        </div>
      </AsideArticle>
    </>
  );
}
export default StaffPick;
