import React from 'react'
import { useEffect,useState } from 'react'
import db from '../appwrite/databases';
// notedata contains the whole object of the note that is body,completed and the id of the note
const Note = ({noteData}) => {
    const [note,setNote]=useState(noteData)

    const handleUpdate=async()=>{
        const completed=!note.completed;
        try{
            await db.notes.update(note.$id,{completed});
            setNote((prev)=>({...prev,completed}));
        }catch(error){
            console.log(error);
        }
    }


    return (
    <div>
        <span onClick={handleUpdate}>
            {note.completed ? <strike>{note.body}</strike>:<>{note.body}</>}
            </span>
        </div>
    )
};

export default Note;





// we are providing its own state so that the whenever we click on the note it will not rereder the whole page