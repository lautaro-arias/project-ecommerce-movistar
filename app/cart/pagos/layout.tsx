import Footer from '@/app/modules/components/cart/pagos/footer';
import Nav from '@/app/modules/components/cart/pagos/nav';
import React from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <Nav />
                {children}
            <Footer />
        </>
    )
}
export default Layout;