import Skeleton from "react-loading-skeleton";
import {
  ArticleBody,
  ArticleWrapper,
  ContentRow,
  DesktopImage,
  MobileImage,
  StatsRow,
  TextContent,
} from "../Article";

const SkeletonArticle = () => {
  return (
    <ArticleWrapper>
      <ArticleBody>
        <Skeleton width={120} height={20} />
        <ContentRow>
          <TextContent>
            <Skeleton height={24} width="70%" />
            <Skeleton count={2} />
          </TextContent>
          <MobileImage>
            <Skeleton width={80} height={53} />
          </MobileImage>
        </ContentRow>
        <StatsRow>
          <Skeleton width={200} height={16} />
        </StatsRow>
      </ArticleBody>
      <DesktopImage>
        <Skeleton width={160} height={107} />
      </DesktopImage>
    </ArticleWrapper>
  );
};

export default SkeletonArticle;
