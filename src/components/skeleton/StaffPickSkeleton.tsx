import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { AsideArticle, Stats, Title } from "../StaffPick";

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StaffPickSkeleton = () => {
  return (
    <AsideArticle>
      <div style={{ flex: "1 1 0%" }}>
        <AuthorRow>
          <Skeleton width={22} height={23} />
          <div>
            <Skeleton width={100} height={12} />
          </div>
        </AuthorRow>

        <Title>
          <Skeleton width="90%" height={16} />
        </Title>

        <Stats>
          <Skeleton width={40} height={12} />
        </Stats>
      </div>
    </AsideArticle>
  );
};

export default StaffPickSkeleton;
