import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
// import Modal from 'components/Modal/Modal';

const AsyncMainPage = lazy(() => import('components/MainPage/MainPage'));
const AsyncNewsPage = lazy(() => import('pages/NewsPages/NewsPages'));
const AsyncNoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const AsyncSellNoticesPage = lazy(() =>
  import('pages/NoticesPage/SellNoticesPage')
);
const AsyncLostFoundNoticesPage = lazy(() =>
  import('pages/NoticesPage/LostFoundNoticesPage')
);
const AsyncForFreeNoticesPage = lazy(() =>
  import('pages/NoticesPage/ForFreeNoticesPage')
);
const AsyncFavoriteNoticesPage = lazy(() =>
  import('pages/NoticesPage/FavoriteNoticesPage')
);
const AsyncOwnNoticesPage = lazy(() =>
  import('pages/NoticesPage/OwnNoticesPage')
);
// const AsyncPrivateRoute = lazy(() => import('components/PrivateRoutes/PrivateRoutes'));
// const AsyncNoticesSearch = lazy(() => import('components/NoticesSearch/NoticesSearch'));
const AsyncRegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AsyncRegistrationDetails = lazy(() =>
  import('pages/RegisterPageDetails/RegisterPageDetails')
);
const AsyncLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AsyncUserPage = lazy(() => import('pages/UserPage/UserPage'));
const AsyncOurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AsyncMainPage />} />

        <Route path="news" element={<AsyncNewsPage />} />

        {/* <Route path="notices" element={<AsyncNoticesPage />}>
          <Route path="sell" element={<AsyncSellNoticesPage />} />
          <Route path="for-free" element={<AsyncLostFoundNoticesPage />} />
          <Route path="lost-found" element={<AsyncForFreeNoticesPage />} /> */}

        <Route path="notices" element={<AsyncNoticesPage />}>
          <Route path="sell" element={<AsyncSellNoticesPage />} />
          <Route path="for-free" element={<AsyncForFreeNoticesPage />} />
          <Route path="lost-found" element={<AsyncLostFoundNoticesPage />} />
          <Route path="favorite" element={<AsyncFavoriteNoticesPage />} />
          <Route path="own" element={<AsyncOwnNoticesPage />} />
        </Route>

        <Route path="friends" element={<AsyncOurFriendsPage />} />

        <Route path="auth/check" element={<AsyncRegisterPage />} />
        <Route path="auth/register" element={<AsyncRegistrationDetails />} />

        <Route path="login" element={<AsyncLoginPage />} />

        <Route path="user" element={<AsyncUserPage />} />

        <Route path="friends" element={<AsyncOurFriendsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
