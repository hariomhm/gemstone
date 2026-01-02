import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { PostCard, Container } from "../components";
import { useLoaderData } from "react-router-dom";

function AllPosts() {
  //   const [posts, setPosts] = useState(useLoaderData);

  const posts = useLoaderData().documents;

  //   useEffect(() => {
  //     service.getPosts([]).then((posts) => {
  //       if (posts) {
  //         setPosts(posts.documents);
  //       }
  //     });
  //   }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-4 max-[580px]:grid-cols-1 gap-5 max-[780px]:grid-cols-2">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 grid-cols-1">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
