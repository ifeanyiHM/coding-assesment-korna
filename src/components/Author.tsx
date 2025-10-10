import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

import type { DevToArticle } from "../data/data";

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
  item: DevToArticle;
  index: number;
  width: number;
  height: number;
  src: string;
}

// function Author({ index, item, width, height, src }: AuthorProps) {
function Author({ item, width, height }: AuthorProps) {
  return (
    <>
      <GlobalStyles />
      <MetaRow>
        <MetaRowImage>
          <img
            src={item.user?.profile_image_90}
            alt="profile"
            width={width}
            height={height}
          />
        </MetaRowImage>
        {item.organization && <span className="strong">In</span>}
        <span className="strong">
          <a href="#">{item?.user?.username}</a>
        </span>
        {item.organization && <span className="strong">by</span>}
        <span className="strong">
          <a href="#">{item?.user?.name}</a>
        </span>
        {/* {item.or && (
          <img src={`/${item.tag}.PNG`} alt="tag" width={14} height={14} />
        )} */}
      </MetaRow>
    </>
  );
}

export default Author;
