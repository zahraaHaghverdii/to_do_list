import styled from "styled-components";

const StyledAvator = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

function UserAvator() {
  return (
    <StyledAvator>
      <Img src="user-avator.webp" alt="user" />
    </StyledAvator>
  );
}

export default UserAvator;
