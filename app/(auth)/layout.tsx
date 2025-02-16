import * as React from 'react';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): React.ReactElement => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Layout;