import Skeleton from "react-loading-skeleton";

import {
  TopicList,
  List,
  ListItem,
  AvatarWrapper,
  Info,
  NameRow,
  LinkListWrapper,
  LinkList,
  Item,
} from "../../App";

export const ButtonSkeleton = () => (
  <button
    style={{
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      border: "none",
    }}
  >
    <Skeleton width={50} borderRadius={200} />
  </button>
);

export const TopicSkeleton = () => (
  <div style={{ marginBottom: "2.5rem" }}>
    <div style={{ height: "10px", width: "100px" }}></div>
    <TopicList>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <ButtonSkeleton />
        </li>
      ))}
    </TopicList>
    <Skeleton width={130} height={30} />
  </div>
);

export const FollowSkeleton = () => (
  <div style={{ marginBottom: "2.5rem" }}>
    <div style={{ height: "10px", width: "100px" }}></div>
    <List>
      {Array.from({ length: 3 }).map((_, i) => (
        <ListItem key={i}>
          <AvatarWrapper>
            <Skeleton circle width={37} height={33} />
          </AvatarWrapper>
          <Info>
            <NameRow>
              <Skeleton width={80} height={12} />
            </NameRow>
            <Skeleton width={140} height={12} />
          </Info>
          <ButtonSkeleton />
        </ListItem>
      ))}
    </List>
  </div>
);

export const ReadingSkeleton = () => (
  <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem" }}>
    <Skeleton width={140} height={18} style={{ marginBottom: "10px" }} />
    <Skeleton count={2} />
  </div>
);

export const LinkListSkeleton = () => (
  <LinkListWrapper>
    <LinkList>
      {Array.from({ length: 6 }).map((_, i) => (
        <Item key={i}>
          <Skeleton width={60} height={12} />
        </Item>
      ))}
    </LinkList>
  </LinkListWrapper>
);
