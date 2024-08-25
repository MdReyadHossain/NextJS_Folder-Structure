import Count from "@/components/shared/Count";
import { Button } from "@/components/ui/button";
import { getPost } from "@/lib/api/client-api/homeApi";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export interface Post {
    id: number;
    title: string;
    body: string;
}

const getData = async () => {
    try {
        const post = await fetch("https://jsonplaceholder.typicode.com/pts", { cache: "no-cache" })
        return await post.json();
    } catch (error) {
        throw new Error("something went wrong")
    }
}


export default async function Home() {
    const data = await getData();
    return (
        <main>
            {data?.map((item: any) => (
                <>
                    <h1 key={item.id}>{item.title}</h1>
                    <Link href={`/${item.title}/${item.id}`}>Details</Link>
                </>
            ))}
        </main>
    );
}
