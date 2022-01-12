import React, { useState, useEffect } from 'react';
import styled from "styled-components";



const CommentSection= styled.div`

background: linear-gradient( 
    90deg
    , rgb(243 232 236) 15%, rgb(223 206 245 / 76%) 85% );
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

`



function Comment() {

    const [useremail, setuserEmail] = useState("");
    const [username, setuserName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const datas = {
        username: "mejar",
        useremail: "meajar@gmail.com",
        description: description
    }

    const handleSendMessage = async function (e) {
        e.preventDefault();
        console.log("submit the messages");
        var result = await fetch("http://localhost:3000/comments", {
            method: 'POST',
            body: JSON.stringify(datas),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
    }
    return (
        <>

            <h1>comment section</h1>
            <CommentSection>
                <form>
                    <input
                        placeholder='message here...'
                        name="description"
                        type="text"
                        onChange={handleChangeDescription}
                    />
                    <button type="button" onClick={handleSendMessage}>
                        send
                    </button>

                </form>
            </CommentSection>




        </>


    );
}
export default Comment;