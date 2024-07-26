import { format } from 'date-fns';
import { Trip } from '../types';
import { useState } from 'react';

type Props = {
  trip: Trip;
  onDelete: (id: string) => void;
  onAddNote: (tripId: string, note: string) => void;
  onDeleteNote: (tripId: string, noteIndex: number) => void;
  index: number;
};

function TripCard({ trip, onDelete, onAddNote, onDeleteNote, index }: Props) {
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (tripId: string, note: string) => {
    if (note.trim() !== '') {
      onAddNote(tripId, note.trim());
      setNewNote('');
    }
  };

  return (
    <div className="trip-card" key={index}>
      <h4>
        <span>
          {format(trip.startDate, 'PPP')} - {format(trip.endDate, 'PPP')}
        </span>
        <button className="country-button">{trip.country}</button>
        <button className="delete-button" onClick={() => onDelete(trip.id)}>
          Delete
        </button>
      </h4>
      <ul>
        {trip.notes.map((note, noteIndex) => (
          <li key={noteIndex} className="note">
            {note}{' '}
            <button
              className="delete-button"
              onClick={() => onDeleteNote(trip.id, noteIndex)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div className="note-form">
        <input
          type="text"
          className="note-input"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a note"
        />
        <button
          className="add-note-button"
          onClick={() => handleAddNote(trip.id, newNote)}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default TripCard