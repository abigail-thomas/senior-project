function NavBar() {
    return (
        <nav className="bg-bg font-gabarito grid grid-cols-3 gap-5 p-4 ">
            <div className="">
                <h1 className="flex gap-2 text-text font-semibold ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    Cost of Living
                </h1>
            </div>
            <div className="flex justify-center text-secondary ">
                <a href="/">Home</a>
            </div>

            <div className="flex justify-end">
                <button className="px-3 py-2 text-text border-solid border border-secondary rounded-3xl cursor-pointer hover:bg-secondary hover:text-bg transition ease-in-out duration-200">
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default NavBar;