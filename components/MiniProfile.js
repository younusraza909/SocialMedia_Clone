function MiniProfile() {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src="https://links.papareact.com/3ke"
                className='w-16 h-16 rounded-full border p-{2px}' />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>Username</h2>
                <h2 className='text-sm text-gray-400'>
                    Welcome to Instagram
                </h2>
            </div>
            <button className='text-blue-400 text-sm font-semibold'>
                SignOut
            </button>
        </div>
    )
}

export default MiniProfile
