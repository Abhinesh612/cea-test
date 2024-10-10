import React from "react";
import { Nav } from "./Nav";

interface LayoutProps {
    children: React.ReactNode;
    showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({children, showNav = true}) => {
    return (
        <div>
            {showNav && <Nav />}
            <main>{children}</main>
        </div>
    );
}

export default Layout;