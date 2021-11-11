import Post from "./Post"
import { useState, useEffect } from "react"
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore"
import { db } from "../firebase"


function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", 'desc')), snap => {
            setPosts(snap.docs)
        })

        return unsubscribe;
    }, [db])
    return (
        <div>
            {
                posts.map(post => (
                    <Post key={post.id} id={post.id}
                        username={post.data().username}
                        profileImg={post.data().profileImg}
                        image={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
