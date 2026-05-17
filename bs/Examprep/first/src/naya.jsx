import React from 'react'
import { useEffect } from 'react'
import { use } from 'react'

const naya = () => {
    const [title, settitle] = React.useState("")
    const [body, setbody] = React.useState("")
    const [postId, setpostId] = React.useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/1${postId}`)
            .then(res => res.json())
            .then(data => settitle(data.title), setbody(data.body))
    }, [postId]);

    function updatepost() {
        fetch(`https://jsonplaceholder.typicode.com/posts/1${postId}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                title, body
            })
                .then(res => res.json())

        })
    }
    return (
        <>
            <div>
                <input type="number" value={postId} onChange={e => setpostId(e.target.value)} />
                <input value={title} onChange={e => settitle(e.target.value)} />
                <textarea value={body} onChange={e => setbody(e.target.value)} />
                <button onClick={updatepost}>Update</button>
            </div>
        </>
    )
}

export default naya