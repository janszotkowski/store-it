import * as React from 'react';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): React.ReactElement => {
    return (
        <div className={'flex min-h-screen bg-blue-100 p-2'}>
            <section className={'flex-1 p-10 text-white'}>

            </section>
            <section className={'rounded-2xl bg-white p-10'}>
                {props.children}
            </section>
        </div>
    );
}

export default Layout;