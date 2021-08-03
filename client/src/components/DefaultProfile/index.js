import React from 'react';
import Static from '../../setupStatic';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import { Profile } from './styled';
import PropTypes from 'prop-types';

const DefaultProfile = ({ useName }) => {
  const user = useSelector((state) => state.user);

  if (!user.authStatus.isAuth) {
    return null;
  }
  return (
    <>
      <Profile>
        {user.authStatus.imagePath ? (
          <img
            src={`${Static.URI}${user.authStatus.imagePath}`}
            alt="profile_image"
          />
        ) : (
          <Gravatar
            email={user.authStatus.email}
            size={250}
            default="wavatar"
          />
        )}
        <div>{useName && user.authStatus.name}</div>
      </Profile>
    </>
  );
};

DefaultProfile.defaultProps = {
  useName: true,
};

DefaultProfile.propTypes = {
  useName: PropTypes.bool,
};
export default DefaultProfile;
