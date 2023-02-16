import Image from "next/image"


const fetchComments = async (id) => {
await new Promise(resolve => setTimeout(resolve, 3000))

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params }) {
    const { id } = params
    const comments = await fetchComments(id)
    return (
        <>
        <h3>Comments:</h3>
            <ul style={{fontSize:'12px', background: '#eee', padding:'8px', listStyle: 'none'}}>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <Image width='50' height='50' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt="avatar" />
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}