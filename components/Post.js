import {
    BookmarkAltIcon,
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import { useSession } from "next-auth/react"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, username, profileImg, image, caption }) {
    const { data: session } = useSession()

    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* Header */}
            <div className='flex items-center p-5'>
                <img src={profileImg} alt='' className='rounded-full h-12 w-12 
                object-contain border p-1 mr-3' />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5 cursor-pointer' />
            </div>

            {/* img */}
            <img src={image} className='object-cover w-full' />

            {/* Buttons */}
            {session && (
                <div className='flex items-center justify-between px-4 py-4'>
                    <div className='flex space-x-4 items-center'>
                        <HeartIcon className='btn' />
                        <ChatIcon className='btn' />
                        <PaperAirplaneIcon className='btn' />
                    </div>
                    <BookmarkAltIcon className='btn' />
                </div>
            )}


            {/* Caption */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username} </span>{caption}
            </p>


            {/* Comments */}

            {/* Inputbox */}
            {
                session && (
                    <form className='flex items-center p-4'>
                        <EmojiHappyIcon className='h-7' />
                        <input type="text"
                            placeholder='Add a comment....'
                            className='border-none flex-1 focus:ring-0' />
                        <button className='font-semibold text-blue-400'>Post</button>
                    </form>
                )
            }

        </div>
    )
}

export default Post
