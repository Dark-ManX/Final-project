import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import MainPage from 'components/MainPage/MainPage';
// import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';

// const AsyncMainPage = lazy(() => import('components/MainPage/MainPage'));
const AsyncNewsPage = lazy(() => import('pages/NewsPages/NewsPages'));
const AsyncNoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const AsyncNoticeCategoryList = lazy(() => import('components/Notices/NoticesCategoryList/NoticesCategoryList'));
// const AsyncSellNoticesPage = lazy(() => import('components/Notices/SellNotices/SellNotices'));
const AsyncLostFoundNoticesPage = lazy(() => import('components/Notices/LostFoundNotices/LostFoundNotices'));
// const AsyncForFreeNoticesPage = lazy(() => import('components/Notices/ForFreeNotices/ForFreeNotices'));
const AsyncFavoriteNoticesPage = lazy(() => import('components/Notices/FavoriteNotices/FavoriteNotices'));
const AsyncOwnNoticesPage = lazy(() => import('components/Notices/OwnNotices/OwnNotices'));
// const AsyncPrivateRoute = lazy(() => import('components/PrivateRoutes/PrivateRoutes'));
// const AsyncNoticesSearch = lazy(() => import('components/NoticesSearch/NoticesSearch'));
const AsyncRegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AsyncRegistrationDetails = lazy(() => import('components/Auth/RegisterPageDetails/RegisterPageDetails'));
const AsyncLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AsyncUserPage = lazy(() => import('pages/UserPage/UserPage'));
const AsyncOurFriendsPage = lazy(() => import('pages/OurFriendsPage/OurFriendsPage'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />

        <Route path="news" element={<AsyncNewsPage />} />

        <Route path='notices' element={<AsyncNoticesPage />}>
          <Route path=':path' element={<AsyncNoticeCategoryList />} />
{/* 
          <Route path='sell' element={<AsyncSellNoticesPage />} />
          <Route path='for-free' element={<NoticesCategoryList />} />
          <Route path='lost-found' element={<AsyncLostFoundNoticesPage />} />
          <Route path='favorite' element={<AsyncFavoriteNoticesPage />} />
          <Route path='own' element={<AsyncOwnNoticesPage />} /> */}
        </Route>

        <Route path="friends" element={<AsyncOurFriendsPage />} />

        <Route path="register" element={<AsyncRegisterPage />}>
          <Route path=":id" element={<AsyncRegistrationDetails />} />
        </Route>

        <Route path="login" element={<AsyncLoginPage />} />

        <Route path="user" element={<AsyncUserPage />} />

        <Route path="friends" element={<AsyncOurFriendsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
