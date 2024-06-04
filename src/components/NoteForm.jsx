import React from 'react'
import db from '../appwrite/databases';
const NoteForm = ({setNotes}) => {

    const handleAdd=async(e)=>{
        e.preventDefault();
        const noteBody=e.target.body.value;

        if(!noteBody) return alert('Please enter a note');

        try{
            // add the note to the database
            const response=await db.notes.create({body:noteBody});
            setNotes((prev)=>[response,...prev]);
            e.target.reset() //to reset the form
        }catch(error){
            console.log(error);
        }

    }


  return (
  <form action="" onSubmit={handleAdd} id="todo-form">
    <input placeholder='What to do today 😁' type="text" name="body" id="" />
  </form>
  )
}

export default NoteForm
