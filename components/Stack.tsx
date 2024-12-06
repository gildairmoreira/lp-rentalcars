import React from 'react'


function Stack() {
    return (
        <div>
            <div className='flex overflow-hidden justify-center -space-x-2'>
                <img
                    alt="profile 1"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixl"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-White"
                />
                <img
                    alt="profile 2"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-White"
                />
                <img
                    alt="profile 3"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixl"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-White"
                />
                <img
                    alt="profile 4"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-White"
                />
            </div>
        </div>
    )
}

export default Stack