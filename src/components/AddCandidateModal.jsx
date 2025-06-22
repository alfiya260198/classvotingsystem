import { useState } from 'react';
import { useVote } from '../context/VoteContext';

// Modal styles
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    background: 'white',
    padding: '30px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
  }
};

const AddCandidatwModal = () => {
  const { addCandidate } = useVote();
  const [newName, setNewName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (!newName.trim()) return alert("Enter candidate name!");
    addCandidate(newName.trim());
    setNewName('');
    setShowModal(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => setShowModal(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#16a34a',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Add New Candidate
      </button>

      {/* Modal */}
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <button style={modalStyles.closeButton} onClick={() => setShowModal(false)}>×</button>
            <h2 style={{ marginTop: 0 }}>Add Candidate</h2>
            <input
              type="text"
              placeholder="Candidate name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '15px'
              }}
            />
            <button
              onClick={handleAdd}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCandidatwModal;
