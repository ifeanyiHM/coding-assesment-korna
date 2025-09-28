import styled from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import Author from "./Author";

import type { MediumFeedItem } from "../data/data";
import { useIsMobileScreen } from "../hooks/useIsMobileScreen";

import { FaHandsClapping, FaComment } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.25rem 0;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1280px) {
    gap: 4rem;
    padding: 2rem 0;
  }
`;

const ArticleBody = styled.div`
  flex: 1;
`;

const ClapNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-secondary);
  margin-bottom: 2rem;

  .user {
    color: var(--color-primary);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Excerpt = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 0.875rem;
  color: var(--color-secondary);
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (min-width: 1024px) {
    margin: 0.25rem 0 0 0;
  }
`;

const StatsRow = styled.div`
  margin: 0.75rem 0 0 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-secondary);
  font-size: 0.813rem;

  .icon {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .flip {
    transform: scaleX(-1);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.813rem;
    margin: 1rem 0 0 0;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
  cursor: pointer;
`;

const MobileImage = styled.div`
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopImage = styled.div`
  display: none;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

const BookmarkDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;

interface ArticleProps {
  item: MediumFeedItem;
  index: number;
}

function Article({ item, index }: ArticleProps) {
  const isMobile = useIsMobileScreen();

  return (
    <>
      <GlobalStyles />
      <ArticleWrapper>
        <ArticleBody>
          {index === 1 && (
            <ClapNotice>
              <FaHandsClapping size={14} />
              <span className="user">Trey Huffine</span> clapped
            </ClapNotice>
          )}

          <Author
            index={index}
            item={item}
            width={20}
            height={20}
            src="profile"
          />

          <ContentRow>
            <TextContent>
              <Title>{item.title}</Title>
              <Excerpt>
                {item.excerpt?.length && isMobile && item.excerpt.length > 71
                  ? `${item.excerpt.slice(0, 65)}...`
                  : item.excerpt}
              </Excerpt>
            </TextContent>
            <MobileImage>
              <img
                src={`/articleImage${index + 1}.PNG`}
                alt={item.title}
                width={80}
                height={53}
              />
            </MobileImage>
          </ContentRow>

          <StatsRow>
            <PiStarFourFill color="#ffc017" />
            <span>{item.stats.date}</span>
            <span className="icon">
              <FaHandsClapping size={16} /> {item.stats.claps}
            </span>
            <span className="icon">
              <FaComment size={12} className="flip" /> {item.stats.comments}
            </span>

            <Actions>
              <CiCircleMinus size={22} />
              <BookmarkDesktop>
                <MdOutlineBookmarkAdd size={22} />
              </BookmarkDesktop>
              <HiDotsHorizontal size={20} />
            </Actions>
          </StatsRow>
        </ArticleBody>

        <DesktopImage>
          <img
            src={`/articleImage${index + 1}.PNG`}
            alt={item.title}
            width={160}
            height={107}
          />
        </DesktopImage>
      </ArticleWrapper>
    </>
  );
}

export default Article;
