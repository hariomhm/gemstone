import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { PostCard , Container} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-4 max-[580px]:grid-cols-1 gap-5 max-[780px]:grid-cols-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 grid-cols-1 bg-white shadow-md rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home