import { useState } from "react";

import styled from "styled-components";
import { HiArrowUpRight } from "react-icons/hi2";

import {
  links,
  mediumFeed,
  recommendedTopics,
  staffPicks,
  whoToFollow,
} from "./data/data";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import StaffPick from "./components/StaffPick";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Wrapper = styled.div``;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #6b6b6b;
  font-size: 0.906rem;
  padding: 0.625rem 0;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;

  /* Hide on medium screens and up */
  @media (min-width: 768px) {
    display: none;
  }
`;

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

const SectionWrapper = styled.div`
  @media (min-width: 1280px) {
    width: 78%;
    margin: 0 auto;
  }
`;

const TabRow = styled.div`
  display: flex;
  gap: 1.7rem;
  border-bottom: 1px solid #f2f2f2;
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
    border-top: 1px solid #f2f2f2;
  }
`;

const AsideWrapper = styled.aside`
  display: none;
  border-left: 1px solid #f2f2f2;

  @media (min-width: 1024px) {
    display: block;
    width: 33%;
    padding-left: 1.5rem;
  }

  @media (min-width: 1280px) {
    width: 25%;
    padding-left: 2.5rem;
  }
`;

const Heading = styled.h2`
  font-weight: 500;
  color: #242424;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const FullListBtn = styled.button`
  font-size: 0.875rem;
  color: #6b6b6b;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 0 0 0;
`;

const TopicWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  color: #242424;
  margin-bottom: 1rem;
`;

const TopicList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 1rem;
  padding: 0;
  list-style: none;
`;

const TopicItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  background: #f2f2f2;
  color: #242424;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #e5e5e5;
  }
`;

const SeeMoreButton = styled.button`
  font-size: 0.875rem;
  color: #6b6b6b;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;

const ReadingWrapper = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
`;

const ReadingTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
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

const PopularWriterWrapper = styled.div``;

const FTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const AvatarWrapper = styled.div`
  flex-shrink: 0;
  cursor: pointer;
`;

const Info = styled.div`
  flex: 1;
  min-width: 0;
  cursor: pointer;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Name = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #242424;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`;

const Type = styled.p`
  font-size: 0.75rem;
  color: #242424;
  margin: 0 0 0.25rem 0;
`;

const FDescription = styled.p`
  font-size: 0.875rem;
  color: #6b6b6b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;

const FollowBtn = styled.button`
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid #242424;
  background-color: #fff;
  color: #242424;
  flex-shrink: 0;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #9ca3af;
  }
`;

const MoreBtn = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b6b6b;
  margin-top: 1rem;
  border: none;
  background: none;
`;

const LinkListWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  font-size: 0.6875rem;
  color: #6b6b6b;
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
  return (
    <Wrapper>
      <TopBar>
        Open in app{" "}
        <HiArrowUpRight size={15} style={{ paddingBottom: "2px" }} />
      </TopBar>

      <Navigation />
      <Main>
        <Section>
          <SectionWrapper>
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
              {mediumFeed.map((item, index) => (
                <Article key={index} item={item} index={index} />
              ))}
            </Articles>
          </SectionWrapper>
        </Section>

        <AsideWrapper>
          {/* staff pick */}
          <Wrapper>
            <Heading>Staff Picks</Heading>
            <div>
              {staffPicks.map((item, index) => (
                <StaffPick key={index} item={item} index={index} />
              ))}
            </div>
            <FullListBtn>See the full list</FullListBtn>
          </Wrapper>

          {/* Recommended Topics Section */}
          <TopicWrapper>
            <Title>Recommended topics</Title>
            <TopicList>
              {recommendedTopics.map((topic) => (
                <TopicItem key={topic}>{topic}</TopicItem>
              ))}
            </TopicList>
            <SeeMoreButton>See more topics</SeeMoreButton>
          </TopicWrapper>

          {/* Who to Follow Section */}
          <PopularWriterWrapper>
            <FTitle>Who to follow</FTitle>
            <List>
              {whoToFollow.map((user, index) => (
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

                  <FollowBtn>Follow</FollowBtn>
                </ListItem>
              ))}
            </List>
            <MoreBtn>See more suggestions</MoreBtn>
          </PopularWriterWrapper>

          {/* Reading List Section */}
          <ReadingWrapper>
            <ReadingTitle>Reading list</ReadingTitle>
            <Description>
              <span>Click the</span>
              <MdOutlineBookmarkAdd size={22} />
              <span>
                on any story to easily add it to your reading list or a custom
                list that you can share.
              </span>
            </Description>
          </ReadingWrapper>

          <LinkListWrapper>
            <LinkList>
              {links.map((link) => (
                <Item key={link}>
                  <StyledLink href="#">{link}</StyledLink>
                </Item>
              ))}
            </LinkList>
          </LinkListWrapper>
        </AsideWrapper>
      </Main>
    </Wrapper>
  );
}

export default App;
