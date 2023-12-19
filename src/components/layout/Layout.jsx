import React from 'react';

function Layout({children}) {
    return (
        <>
            <header className=' flex items-center justify-between bg-[#3874ff] py-2 px-5 mb-[150px] rounded-md'>
                <h1>Crypto App</h1>
            </header>
            {children}
            <footer className=' text-center bg-[#3874ff]  p-5 mt-[80px] rounded-md'>
                <p>Developed by Reza whith ❤️</p>
            </footer>
        </>
    );
}

export default Layout;