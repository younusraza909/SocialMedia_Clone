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
import { useEffect, useState } from 'react'

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "@firebase/firestore"
import { db } from "../firebase"
import Moment from "react-moment"

function Post({ id, username, profileImg, image, caption }) {
    const { data: session } = useSession()
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => (
        onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamps', 'desc')), (snap) => setComments(snap.docs))
    ), [db])

    const sendComment = async (e) => {
        e.preventDefault();


        const commentToSend = comment
        setComment('')

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamps: serverTimestamp()
        })
    }

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
            {
                comments.length > 0 && (
                    <div className='ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black'>
                        {comments.map(comment => (
                            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                                <img src={comment.data().userImage} className='h-7 rounded-full' />
                                <p className='text-sm flex-1'>
                                    <span className='font-bold'>{comment.data().username}  </span>
                                    {comment.data().comment}
                                </p>
                                <Moment className='pr-5 text-xs' fromNow>{comment.data().timestamps?.toDate()}</Moment>

                            </div>
                        ))}
                    </div>
                )
            }

            {/* Inputbox */}
            {
                session && (
                    <form className='flex items-center p-4' >
                        <EmojiHappyIcon className='h-7' />
                        <input type="text"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder='Add a comment....'
                            className='border-none flex-1 focus:ring-0' />
                        <button onClick={sendComment} type='submit' disabled={!comment.trim()} className='font-semibold text-blue-400'>Post</button>
                    </form>
                )
            }

        </div >
    )
}

export default Post
