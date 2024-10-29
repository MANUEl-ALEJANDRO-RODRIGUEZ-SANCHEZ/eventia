'use client'

import { useState } from "react";

function LikeButton({email, event}) {
    const [isLiked, setIsLiked] = useState(event.isLiked);
    const [numberOfLikes, setNumberOfLikes] = useState(event.likes);

    const handleLike = async () => {
        const response = await fetch('/api/user/set_like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, id_event: event.id_event })
        });

        const data = await response.json();
        if (response.ok) {
            if(isLiked){
                setIsLiked(false);
                setNumberOfLikes(numberOfLikes - 1);
            }else if(!isLiked){
                setIsLiked(true);
                setNumberOfLikes(numberOfLikes + 1);
            }
        } else {
            alert('Lo sentimos, no es posible dar me gusta en este momento: '+ data.message);
        }
    };


    return (
        <>
            <button className="btn btn-outline-danger d-flex align-items-center" style={{flexDirection: "column", justifyContent: "center"}} onClick={handleLike}>
                {
                    isLiked 
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                    </svg>
                }
                <p>{numberOfLikes}</p>   
            </button>
        </>
    )
}

export default LikeButton;