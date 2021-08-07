import React from 'react';
import Static from '../../setupStatic';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import { Profile } from './styled';
import PropTypes from 'prop-types';

const DefaultProfileImg = ({ useName, style }) => {
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
            style={style}
          />
        ) : (
          <Gravatar
            email={user.authStatus.email}
            size={250}
            default="wavatar"
            style={style}
          />
        )}
        {useName && user.authStatus.name}
      </Profile>
    </>
  );
};

DefaultProfileImg.defaultProps = {
  useName: true,
};

DefaultProfileImg.propTypes = {
  useName: PropTypes.bool,
};
export default DefaultProfileImg;
