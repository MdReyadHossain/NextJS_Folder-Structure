import { IParams } from "@/interfaces/global.interface";
import React from "react";


export const generateMetadata = async ({ params: { slug } }: IParams) => {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts/" + slug, { cache: "no-cache" })
    const data = await post.json();
    return {
        title: data.title,
    };
}

export async function generateStaticParams() {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts/").then((res) => res.json())
    return post.map((posted: any) => ({
        slug: posted.id.toString(),
    }))
}

const getDetails = async (id: any) => {
    try {
        const post = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, { cache: "no-cache" })
        return await post.json();
    } catch (error) {
        throw new Error("something went wrong")
    }
}

const page = async ({ params: { slug: [title, id] } }: any) => {
    // const [title, id] = params;
    const data = await getDetails(id);
    // console.log('object===', params);

    return (
        <div>
            {/* {data.title} */}
            Hello world
            Title: {data.title}
            Id: {data.id}
        </div>
    );
};

export default page;
