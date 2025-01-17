import React from 'react'
import { useEffect,useState } from 'react'
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';
import Note from '../components/Note';
import ThemeOptions from '../components/ThemeOptions';
const Notes = () => {

    const [notes,setNotes]=useState([]);

    useEffect(()=>{init()},[])

    const init=async()=>{
        const response = await db.notes.list([Query.orderDesc('$createdAt')]);
        // resposne from the database is an array of objects
        
        setNotes(response.documents);
        console.log(response.documents);
    }


  return (
    
    // now we have to show the notes in the UIso mapp all the notes
    <div>
        <div>
            <h1>Todo Application</h1>
        </div>
        <div className="theme-options">
            <ThemeOptions theme='light'/>
            <ThemeOptions theme='dark'/>
            <ThemeOptions theme='purple'/>

        </div>



        <NoteForm setNotes={setNotes}/>
      {
        notes.map((e)=>{
            return (    
            <Note key={e.$id} noteData={e} setNotes={setNotes}/>
                // this noteData contains the object that have the body,completed and the id of the note
            )
        })
      }
    </div>
  )
}

export default Notes


// getting me setnotes is only used to display the notes in the UI
// backend me setnotes is used to add the notes to the database