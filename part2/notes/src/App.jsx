

import { useState,useEffect } from "react"
import Note from "./components/Note"
import axios from 'axios'
 const App = (props) => {
const [notes, setNotes] = useState([])
const [showAll, setShowAll] = useState(true)
const [newNote, setNewNote] = useState()
useEffect(() => {
console.log('effect')
axios
.get('http://localhost:3000/notes')
.then(response => {
console.log('promise fulfilled')
setNotes(response.data)
})
}, [])
console.log('render', notes.length, 'notes')
const notesToShow = showAll
? notes
: notes.filter(note => note.important === true)

/*Détecter ce que l'utilisateur écrit*/
const handleNoteChange = (event) => {
setNewNote(event.target.value/*Donne-moi ce que l'utilisateur vient d'écrire dans le champ.*/) /*met cette valeur dans newNote*/
}
const addNote = (event) => {
event.preventDefault() /* eviter de recharger la page a chaque fois qu'on somet le formulaire*/

const noteObject = {
content: newNote,
date: new Date().toISOString(),
important: Math.random() < 0.5,
id: notes.length + 1,
}
setNotes(notes.concat(noteObject)) /*met cette nouvelle liste dans l'état.*/
setNewNote('')/*vider le champ*/
 }
return (

<div>
<h1>Notes</h1>
<div>
<button onClick={() => setShowAll(!showAll)}>
show {showAll ? 'important' : 'all' }
</button>
</div>
<ul>
{notesToShow.map(note =>
<Note key={note.id} note={note} />/*sert à parcourir le tableau afficher et chaque note*/
)}
</ul>
<form onSubmit={addNote}>
<input
value={newNote}
onChange={handleNoteChange}
/>
<button type="submit">save</button>
</form>
</div>
)
 }
export default App



