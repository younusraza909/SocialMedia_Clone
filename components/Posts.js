import Post from "./Post"


const dummyData = [
    {
        id: '123',
        username: 'test@test.com',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Testing Caption'
    },
    {
        id: '123',
        username: 'test@test.com',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Testing Caption'
    }
]

function Posts() {
    return (
        <div>
            {
                dummyData.map(post => (
                    <Post key={post.id} id={post.id}
                        username={post.username}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
