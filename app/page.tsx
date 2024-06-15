import { Suspense } from 'react';
import Carousels from './modules/components/home/carousels';
import SideMenu from './modules/components/home/sideMenu';
import CardsProduct from './modules/components/home/cardsProduct';
export default function Home() {
  return (
    <>
        <Carousels />
        <SideMenu />
    </>
  );
}
