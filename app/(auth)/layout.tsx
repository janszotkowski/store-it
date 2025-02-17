import * as React from 'react';
import FolderIcon from '@/icons/folder.svg';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): React.ReactElement => {
    return (
        <div className={'flex min-h-screen bg-blue-100 p-3 lg:justify-between'}>
            <section className={'hidden w-1/2 flex-1 items-center justify-center p-10 text-white lg:flex xl:w-2/5'}>
                <div className={'flex max-w-xl flex-col space-y-5'}>
                    <h1 className={'h1'}>Welcome to StoreIt!</h1>
                    <p className={'body-1'}>
                        Store your files securely and access them from anywhere.
                        Sign in to continue or create a new account in just a few steps.
                    </p>

                    <img
                        src={'/illustration.svg'}
                        alt={'StoreIt Logo'}
                        className={'size-96 transition-all hover:rotate-2 hover:scale-105'}
                    />
                </div>
            </section>

            <section className={'mx-auto w-[600px] rounded-2xl bg-white p-10 transition-all duration-300'}>
                {props.children}
                <FolderIcon className={'size-6'} />
            </section>
        </div>
    );
};

export default Layout;