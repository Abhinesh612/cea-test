import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Foot";

interface LayoutProps {
    children: React.ReactNode;
    showNav?: boolean;
    showFoot?: boolean;
}

const Layout: React.FC<LayoutProps> = ({children, showNav = true, showFoot = true}) => {
    return (
        <div>
            {showNav && <Nav />}
            <main>{children}</main>
            {showFoot && <Footer />}
        </div>
    );
}

export default Layout;