import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

import { HiArrowUpRight } from "react-icons/hi2";

import {
  links,
  // mediumFeed,
  recommendedTopics,
  // staffPicks,
  whoToFollow,
  type DevToArticle,
} from "./data/data";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import StaffPick from "./components/StaffPick";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./styles/Button";
import SkeletonArticle from "./components/skeleton/SkeletonArticle";
import StaffPickSkeleton from "./components/skeleton/StaffPickSkeleton";
import {
  FollowSkeleton,
  LinkListSkeleton,
  ReadingSkeleton,
  TopicSkeleton,
} from "./components/skeleton/AsideSkeleton";

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-secondary);
  font-size: 0.906rem;
  padding: 0.625rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);

  /* Hide on medium screens and up */
  @media (min-width: 768px) {
    display: none;
  }
`;

const Wrapper = {
  Tag: styled.div``,

  Section: styled.div`
    @media (min-width: 1280px) {
      width: 78%;
      margin: 0 auto;
    }
  `,

  Aside: styled.aside`
    display: none;
    border-left: 1px solid var(--color-border);

    @media (min-width: 1024px) {
      display: block;
      width: 33%;
      padding-left: 1.5rem;
      position: sticky;
      /* top: -26.5rem; */
      align-self: flex-start;
      height: fit-content;
    }

    @media (min-width: 1280px) {
      width: 25%;
      padding-left: 2.5rem;
    }
  `,

  Topic: styled.div`
    margin-bottom: 2.5rem;
  `,

  Reading: styled.div`
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  `,
};

const Main = styled.main`
  width: 86%;
  margin: 0 auto;
  display: block;

  @media (min-width: 768px) {
    width: 88%;
  }
  @media (min-width: 1024px) {
    width: 94%;
    display: flex;
  }
`;

const Section = styled.section`
  @media (min-width: 1024px) {
    width: 67%;
    padding-right: 1.75rem;
  }
  @media (min-width: 1280px) {
    width: 75%;
  }
`;

const TabRow = styled.div`
  display: flex;
  gap: 1.7rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.875rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Tab = styled.span<{ active: boolean }>`
  padding: 1.6rem 0 1rem;
  border-bottom: 1px solid ${(props) => (props.active ? "#000" : "transparent")};
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 2.5rem 0 1rem;
  }
`;

const Articles = styled.div`
  border-top: none;
  > * + * {
    border-top: 1px solid var(--color-border);
  }
`;

const Heading = styled.h2`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const TopicList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 1rem;
  padding: 0;
  list-style: none;
`;

const ReadingTitle = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;

  span {
    vertical-align: middle;
  }

  svg {
    display: inline;
    vertical-align: middle;
    margin: 0 0.25rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin-bottom: 1rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
  cursor: pointer;
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
  cursor: pointer;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Name = styled.h3`
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

const Type = styled.p`
  font-size: 0.75rem;
  margin: 0 0 0.25rem 0;
`;

export const FDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;

export const LinkListWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  font-size: 0.6875rem;
  color: var(--color-secondary);
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  const [category, setCategory] = useState("For you");
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  //fetch articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  //infinite scrolling
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      { threshold: 1.0 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loading]);

  const visibleArticles = articles.slice(0, visibleCount);

  console.log(articles);

  // Dynamically sets the aside's sticky top position so that when it sticks,
  // its bottom aligns with the bottom of the viewport. This allows the aside
  // to scroll naturally with the page until its last content is visible, then
  // stops scrolling while the main content continues.
  useEffect(() => {
    const aside = document.querySelector("aside");
    if (!aside) return;

    const updateStickyTop = () => {
      const asideHeight = aside.offsetHeight;
      const viewportHeight = window.innerHeight;
      const topValue = -(asideHeight - viewportHeight);

      aside.style.top = `${topValue}px`;
    };

    updateStickyTop();

    window.addEventListener("resize", updateStickyTop);

    return () => window.removeEventListener("resize", updateStickyTop);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Wrapper.Tag>
        <TopBar>
          Open in app{" "}
          <HiArrowUpRight size={15} style={{ paddingBottom: "2px" }} />
        </TopBar>

        <Navigation />
        <Main>
          <Section>
            <Wrapper.Section>
              <TabRow>
                {["For you", "Featured"].map((item) => (
                  <Tab
                    key={item}
                    active={category === item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </Tab>
                ))}
              </TabRow>

              <Articles>
                {loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <SkeletonArticle key={i} />
                    ))
                  : visibleArticles.map((item: DevToArticle, index: number) => (
                      <Article key={index} item={item} index={index} />
                    ))}
              </Articles>
            </Wrapper.Section>
            <div ref={loaderRef} className="h-1"></div>
          </Section>

          <Wrapper.Aside>
            {/* staff pick */}
            <Wrapper.Tag>
              <Heading>Staff Picks</Heading>
              <div style={{ padding: " 0 0 10px 0" }}>
                {loading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <StaffPickSkeleton key={index} />
                    ))
                  : articles
                      .slice(0, 3)
                      .map((item, index) => (
                        <StaffPick key={index} item={item} index={index} />
                      ))}
              </div>
              {!loading && <Button type="see more">See the full list</Button>}
            </Wrapper.Tag>

            {/* Recommended Topics Section */}
            <Wrapper.Topic>
              {!loading && <Title>Recommended topics</Title>}
              <TopicList>
                {loading ? (
                  <TopicSkeleton />
                ) : (
                  recommendedTopics.map((topic) => (
                    <li key={topic}>
                      <Button type="topic">{topic}</Button>
                    </li>
                  ))
                )}
              </TopicList>
              {!loading && <Button type="see more">See more topics</Button>}
            </Wrapper.Topic>

            {/* Who to Follow Section */}
            <Wrapper.Tag>
              {!loading && <Title>Who to follow</Title>}
              <List>
                {loading ? (
                  <FollowSkeleton />
                ) : (
                  whoToFollow.map((user, index) => (
                    <ListItem key={index}>
                      <AvatarWrapper>
                        <img
                          src={`/follow${index + 1}.PNG`}
                          alt="profile"
                          width={37}
                          height={33}
                          style={{ objectFit: "cover" }}
                        />
                      </AvatarWrapper>

                      <Info>
                        <NameRow>
                          <Name>{user.name}</Name>
                          {user.verified && (
                            <img
                              src="/drTag.PNG"
                              alt="verified"
                              width={20}
                              height={20}
                              style={{ objectFit: "cover" }}
                            />
                          )}
                        </NameRow>
                        {user.type && <Type>{user.type}</Type>}
                        <FDescription>{user.description}</FDescription>
                      </Info>

                      <Button type="follow">Follow</Button>
                    </ListItem>
                  ))
                )}
              </List>
              {!loading && (
                <Button type="see more">See more suggestions</Button>
              )}
            </Wrapper.Tag>

            {/* Reading List Section */}
            <Wrapper.Reading>
              {loading ? (
                <ReadingSkeleton />
              ) : (
                <>
                  <ReadingTitle>Reading list</ReadingTitle>
                  <Description>
                    <span>Click the</span>
                    <MdOutlineBookmarkAdd size={22} />
                    <span>
                      on any story to easily add it to your reading list or a
                      custom list that you can share.
                    </span>
                  </Description>
                </>
              )}
            </Wrapper.Reading>

            {/* Linked paged section */}
            <LinkListWrapper>
              <LinkList>
                {loading ? (
                  <LinkListSkeleton />
                ) : (
                  links.map((link) => (
                    <Item key={link}>
                      <StyledLink href="#">{link}</StyledLink>
                    </Item>
                  ))
                )}
              </LinkList>
            </LinkListWrapper>
          </Wrapper.Aside>
        </Main>
        <div ref={loaderRef} className="h-1"></div>
      </Wrapper.Tag>
    </>
  );
}

export default App;
