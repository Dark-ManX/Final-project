import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { response } from 'api';
import Error from 'components/Error/Error';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import defaultImg from 'img/defaultImg.jpg';
import { useUpdateAvatarMutation } from 'redux/auth/authOperations';

import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';

const UserData = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [updateAvatar] = useUpdateAvatarMutation();

  console.log('user', avatar);

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);

  const handleChangeAvatar = async evt => {
    const formData = new FormData();

    formData.append('avatar', evt.target.files[0]);
    console.log(formData);
    const {
      data: { avatarURL },
    } =
      // console.log('formData :>> ', formData);
      await updateAvatar(formData);

    // console.log(avatarURL);
    // setAvatar(avatarURL);
  };

  useEffect(() => {
    const fetchUser = async token => {
      try {
        const res = await getUser(token);
        setUser(res);
      } catch (err) {
        setError(true);
      }
      // setAvatar(res.logo);
    };

    fetchUser(token);
  }, [getUser, token]);

  // const avatarUser = () => {
  //   if (logo.includes('https://s.gravatar.com')) {
  //     return defaultImg;
  //   } else {
  //     return `${ROUTES.BASE_URL}/${logo}`;
  //   }
  // };

  return (
    <UserInfo>
      {!error ? (
        <>
          <Avatar>
            <ImgUser src={user.logo ? user.logo : defaultImg} alt={user.name} />
            <label>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                name="image"
                onChange={handleChangeAvatar}
                style={{ display: 'none' }}
              />
              <EditPhotoBtn>
                <img src={editPhoto} alt="addPet" />
                Edit photo
              </EditPhotoBtn>
            </label>
          </Avatar>
          <UserDataItem />
        </>
      ) : (
        <Error />
      )}
    </UserInfo>
  );
};

export default UserData;

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};
