import { Outlet } from 'react-router';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-100">
      <Header />
      <main className="my-8 px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
