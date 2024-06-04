import React from 'react'
import { useEffect,useState } from 'react'
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';
const Notes = () => {

    const [notes,setNotes]=useState([]);

    useEffect(()=>{init()},[])

    const init=async()=>{
        const response = await db.notes.list([Query.orderDesc('$createdAt')]);
        // resposne from the database is an array of objects
        
        setNotes(response.documents);
        // console.log(response.documents);
    }


  return (
    
    // now we have to show the notes in the UIso mapp all the notes
    <div>
        <NoteForm setNotes={setNotes}/>
      {
        notes.map((e)=>{
            return <div key={e.$id}>{e.body}</div>
        })
      }
    </div>
  )
}

export default Notes


// getting me setnotes is only used to display the notes in the UI
// backend me setnotes is used to add the notes to the database