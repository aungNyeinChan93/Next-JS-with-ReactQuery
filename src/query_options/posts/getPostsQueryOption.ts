import { queryOptions } from "@tanstack/react-query";

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface Reactions {
    likes: number;
    dislikes: number;
}



export async function getAllPosts(): Promise<Post[]> {
    const posts = await fetch(`https://dummyjson.com/posts`).then(res => res.json());
    return posts
}



export default function getPostsQueryOption() {
    return queryOptions({
        queryKey: ['posts'],
        queryFn: getAllPosts,
    })
}