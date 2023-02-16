import {ListOfPosts}  from "./ListOfPosts"

export default async function PostPage({ params }) {
    return (
        <section>
            <h1>Estos son nuestros posts...</h1>
            <ListOfPosts/>
        </section>
    )
}