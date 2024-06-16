// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import './App.css';

// Modal.setAppElement('#root');

// function App() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [transcriptName, setTranscriptName] = useState('');
//   // const { transcript, resetTranscript } = useSpeechRecognition();
//   const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

// const startListening = () => {
//   SpeechRecognition.startListening({ continuous: true });
// };

// const stopListening = () => {
//   SpeechRecognition.stopListening();
// };

// if (!browserSupportsSpeechRecognition) {
//   return <span>Browser doesn't support speech recognition.</span>;
// }

//   const openModal = () => {
//     setModalIsOpen(true);
//     resetTranscript();
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleTranscriptNameChange = (event) => {
//     setTranscriptName(event.target.value);
//   };

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div className="modal-content">
//       <input
//         type="text"
//         placeholder="Enter transcript name"
//         value={transcriptName}
//         onChange={handleTranscriptNameChange}
//         className="transcript-input"
//       />
//       {!listening && (
//         <button onClick={startListening}>Start Transcribing</button>
//       )}
//       {listening && <button onClick={stopListening}>Stop Transcribing</button>}
//       <div className="transcript-output">
//         <p>{transcript}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Modal from 'react-modal';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transcriptName, setTranscriptName] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const openModal = () => {
    setModalIsOpen(true);
    resetTranscript();
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTranscriptNameChange = (event) => {
    setTranscriptName(event.target.value);
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const saveNote = () => {
    if (transcript.trim() !== '') {
      const newNote = { name: transcriptName, text: transcript };
      setSavedNotes([...savedNotes, newNote]);
      resetTranscript();
      setTranscriptName('');
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <button onClick={openModal}>Say Hello</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Transcript Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-header">
          <h2>{transcriptName}</h2>
          <button onClick={closeModal}>Close</button>
        </div>
        <div className="modal-content">
          <input
            type="text"
            placeholder="Enter transcript name"
            value={transcriptName}
            onChange={handleTranscriptNameChange}
            className="transcript-input"
          />
          {!listening && (
            <button onClick={startListening}>Start Transcribing</button>
          )}
          {listening && (
            <button onClick={stopListening}>Stop Transcribing</button>
          )}
          <div className="transcript-output">
            <p>{transcript}</p>
          </div>
          <button onClick={saveNote}>Save Note</button>
        </div>
        <div className="saved-notes">
          <h3>Saved Notes:</h3>
          {savedNotes.map((note, index) => (
            <div key={index}>
              <h4>{note.name}</h4>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;