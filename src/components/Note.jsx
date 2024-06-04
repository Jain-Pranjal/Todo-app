import React from 'react'
import { useEffect,useState } from 'react'
import db from '../appwrite/databases';
import DeleteIcon from '../assets/Delete';
// notedata contains the whole object of the note that is body,completed and the id of the note
const Note = ({noteData,setNotes}) => {
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


    const handleDelete=async()=>{
        try{
            await db.notes.delete(note.$id);
            setNotes((prev)=>prev.filter((e)=>e.$id!==note.$id));
        }catch(error){
            console.log(error);
        }
    }


    return (
    <div>
        <span onClick={handleUpdate}>
            {note.completed ? <strike>{note.body}</strike>:<>{note.body}</>}
            </span>

            <div onClick={handleDelete}>
                <DeleteIcon noteId={note.$id}/>
            </div>



        </div>

    )
};

export default Note;





// we are providing its own state so that the whenever we click on the note it will not rereder the whole page


// whenever we do update or delete on the database then we aslo have to do it on the UI so that the user can see the changes so UI par changes ke lie we need to use the the state of the note so that we can update the UI whenever the database is updated

// setNotes is the main state that is used to show the notes in the UI