import React from 'react';
import Static from '../../setupStatic';
import Gravatar from 'react-gravatar';
import { Profile } from './styled';
import PropTypes from 'prop-types';

const UserProfileImg = ({ style, userImagePath, userEmail }) => {
  return (
    <>
      <Profile>
        {userImagePath ? (
          <img src={`${Static.URI}${userImagePath}`} alt="profile_image" style={style} />
        ) : (
          <Gravatar
            email={userEmail}
            size={250}
            default="wavatar"
            style={style}
          />
        )}
      </Profile>
    </>
  );
};

UserProfileImg.defaultProps = {
  userImagePath: null,
  userEmail: null,
};

UserProfileImg.propTypes = {
  userImagePath: PropTypes.string,
  userEmail: PropTypes.string,
};
export default UserProfileImg;
