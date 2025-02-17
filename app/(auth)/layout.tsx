import * as React from 'react';
import FolderIcon from '@/icons/folder.svg';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): React.ReactElement => {
    return (
        <div className={'flex min-h-screen bg-blue-100 p-3'}>
            <section className={'flex-1 p-10 text-white'}>
                <div className={'max-w-xl'}>
                    <h1>Welcome to StoreIt!</h1>

                    Store your files securely and access them from anywhere.
                    Sign in to continue or create a new account in just a few steps.
                    <img
                        src={'/illustration.svg'}
                        alt={'StoreIt Logo'}
                        className={'size-96 transition-all hover:rotate-2 hover:scale-105'}
                    />
                </div>
            </section>
            <section className={'w-[600px] rounded-2xl bg-white p-10'}>
                {props.children}
                <FolderIcon className={'size-6'} />
            </section>
        </div>
    );
};

export default Layout;