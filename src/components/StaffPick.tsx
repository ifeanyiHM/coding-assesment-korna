import styled from "styled-components";
import { PiStarFourFill } from "react-icons/pi";
import type { MediumFeedItem } from "../data/data";

const AsideArticle = styled.article`
  padding: 0.625rem 0;
  cursor: pointer;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;

  @media (min-width: 1280px) {
    font-size: 0.813rem;
  }
`;

const InfoRowImage = styled.div`
  flex-shrink: 0;
`;

const InfoRowChild = styled.span`
  a {
    flex-shrink: 0;
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #242424;
  margin: 0;
`;

const Stats = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

interface StaffPickProps {
  item: MediumFeedItem;
  index: number;
}

function StaffPick({ item, index }: StaffPickProps) {
  return (
    <AsideArticle>
      <div style={{ flex: "1 1 0%" }}>
        <InfoRow>
          <InfoRowImage>
            <img
              src={`/staff${index + 1}.PNG`}
              alt="profile"
              width={22}
              height={25}
              style={{ objectFit: "cover" }}
            />
          </InfoRowImage>
          {item.category && "In "}
          <InfoRowChild>
            <a href="#">{item.category}</a>
          </InfoRowChild>

          {item.category && " by "}

          <InfoRowChild>
            <a href="#">{item.author}</a>
          </InfoRowChild>
        </InfoRow>

        <div>
          <Title>{item.title}</Title>
        </div>

        <Stats>
          {index === 1 && <PiStarFourFill color="#ffc017" />}
          <span>{item.stats.date}</span>
        </Stats>
      </div>
    </AsideArticle>
  );
}
export default StaffPick;
