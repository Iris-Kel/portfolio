import { Outlet } from 'react-router';
import Banner from '../Baner/Banner';

const PaginaPadrao = () => {
  return (
    <main>
        <Banner />
        <Outlet />
    </main>
  )
};

export default PaginaPadrao;
