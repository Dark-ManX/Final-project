import { response } from 'api';
import Loading from 'components/Common/Loading/Loading';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoryNav/NoticesCategoryNav';
import { Suspense, useEffect, useState } from 'react';

import { MainContainer } from 'components/commonStyles/Container.styled';
import Modal from 'components/Modal/Modal';
import ModalAddNotice from 'components/Notices/ModalAddNotice/ModalAddNotice';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ReactComponent as AddIcon } from 'icons/addPet.svg';
import { useSelector } from 'react-redux';
import { Outlet, useOutletContext } from 'react-router-dom';
import {
  AddPet,
  AddPetBlock,
  Icon,
  LinkAddPet,
} from './ButtonAddNotice.styled';
import {
  AuthLink,
  AuthLinkContainer,
  Category,
  Container,
  Nav,
  StyledErr,
  Title,
} from './NoticesPage.styled';

const NoticesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState(null);
  const [ownQuery, setOwnQuery] = useState(null);
  const [search, setSearch] = useState(null);
  const [count, setCount] = useState(0);
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(false);

  const { getNotices, findNotices } = response;

  const isActual = useOutletContext();

  const token = useSelector(state => state.auth.token);

  const fetchNotices = async (req, key) => {
    try {
      const res = await getNotices(req, key);
      setError(false);
      setNotices(res);
    } catch (err) {
      setError(true);
    }
  };

  const fetchSearch = async req => {
    try {
      const res = await findNotices(req);
      setError(false);
      setNotices(res);
    } catch (err) {
      setError(true);
    }
  };

  const handleSubmit = formInput => {
    setOwnQuery(null);
    setQuery(null);
    setSearch(formInput);
    setCount(count + 1);
  };

  const handleClick = async e => {
    try {
      const { nodeName, pathname, parentNode } = e.target;

      if (nodeName === 'A' && parentNode.className.includes('nav-block')) {
        setOwnQuery(null);
        setSearch(null);
        setCount(count + 1);

        setQuery(pathname.split('/').at(-1));

        return;
      } else if (
        nodeName === 'A' &&
        parentNode.className.includes('own-block')
      ) {
        setQuery(null);
        setSearch(null);
        setCount(count + 1);

        const path = pathname.split('/').at(-1);
        setOwnQuery(path);

        return;
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleFavoriteClick = () => {
    setCount(count + 1);
  };

  const toggleModal = evt => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!count || query) {
      fetchNotices(query);
    } else if (ownQuery) {
      fetchNotices(ownQuery, token);
    } else if (count && search) {
      fetchSearch(search);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [count]);

  return (
    <MainContainer>
      <Container>
        <Title>Find your favorite pet</Title>

        <SearchForm onSubmit={handleSubmit} />
        <Nav>
          <Category>
            <NoticesCategoriesNav />

            {isActual && (
              <AuthLinkContainer className="own-block">
                <AuthLink to="favorite">Favorite ads</AuthLink>
                <AuthLink to="owner">My ads</AuthLink>
              </AuthLinkContainer>
            )}
          </Category>

          {isActual && (
            <AddPetBlock>
              <AddPet>Add pet</AddPet>
              <LinkAddPet onClick={toggleModal}>
                <Icon>
                  <AddIcon width="100%" height="100%" />
                </Icon>
              </LinkAddPet>
            </AddPetBlock>
          )}
        </Nav>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ModalAddNotice onClose={toggleModal} />{' '}
          </Modal>
        )}
        {!error ? (
          <Suspense fallback={<Loading />}>
            <Outlet context={{ notices, handleFavoriteClick, isActual }} />
          </Suspense>
        ) : (
          <StyledErr>There is no information</StyledErr>
        )}
      </Container>
    </MainContainer>
  );
};

export default NoticesPage;
