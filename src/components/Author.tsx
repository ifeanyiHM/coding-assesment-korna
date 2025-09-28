import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

import type { MediumFeedItem } from "../data/data";

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.813rem;
  color: var(--color-secondary);

  .strong {
    flex-shrink: 0;
    a {
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.813rem;
  }
`;

const MetaRowImage = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

interface AuthorProps {
  item: MediumFeedItem;
  index: number;
  width: number;
  height: number;
  src: string;
}

function Author({ index, item, width, height, src }: AuthorProps) {
  return (
    <>
      <GlobalStyles />
      <MetaRow>
        <MetaRowImage>
          <img
            src={`/${src}${index + 1}.PNG`}
            alt="profile"
            width={width}
            height={height}
          />
        </MetaRowImage>
        {item.category && <span className="strong">In</span>}
        <span className="strong">
          <a href="#">{item.category}</a>
        </span>
        {item.category && <span className="strong">by</span>}
        <span className="strong">
          <a href="#">{item.author}</a>
        </span>
        {item.tag && (
          <img src={`/${item.tag}.PNG`} alt="tag" width={14} height={14} />
        )}
      </MetaRow>
    </>
  );
}

export default Author;
