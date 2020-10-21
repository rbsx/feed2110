import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface IProfilePic {
  url: string;
}

const ProfileImg = styled.img`
  border-radius: 50%;
  max-height: 4rem;
`;

export const ProfilePic: FunctionComponent<IProfilePic> = ({ url }) => (
  <ProfileImg alt={"profile-pic"} src={url} />
);

export default ProfilePic;
