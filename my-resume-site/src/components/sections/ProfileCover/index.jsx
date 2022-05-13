import { ProfileContainer, ProfileImg } from "./ProfleCoverElements";
import Cover from "../../../images/cover-image.jpg";
import React from 'react';

const ProfileCover = () => {
  return (
    <ProfileContainer>
      <ProfileImg src={Cover} />
    </ProfileContainer>
  );
};
export default ProfileCover;
