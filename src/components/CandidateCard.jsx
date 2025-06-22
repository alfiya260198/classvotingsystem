import { useVote } from '../context/VoteContext';

const CandidateCard = ({ candidate }) => {
  const {
    currentVoter, votingActive, addVote, addVoter, removeCandidate, hasVoted, totalVotes
  } = useVote();

  const handleVote = () => {
    const trimmedName = currentVoter.trim();
    if (!trimmedName) return alert("Enter your name!");
    if (hasVoted(trimmedName)) return alert("You already voted!");

    addVote(candidate.id);
    addVoter(trimmedName);
  };

  const percentage = totalVotes ? Math.round((candidate.votes / totalVotes) * 100) : 0;

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', backgroundColor: 'white' }}>
      <button onClick={() => removeCandidate(candidate.id)} style={{
        float: 'right', background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '4px', padding: '5px 10px',
        color: '#dc2626', border: 'none', cursor: 'pointer'
      }}>Remove</button>

      <h3>{candidate.name}</h3>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Votes: {candidate.votes}</span><span>{percentage}%</span>
        </div>
        <div style={{ height: '10px', background: '#f3f4f6', borderRadius: '5px', marginTop: '5px' }}>
          <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: '#4f46e5', borderRadius: '5px' }} />
        </div>
      </div>

      {votingActive && (
        <button
          onClick={handleVote}
          disabled={!currentVoter.trim() || hasVoted(currentVoter.trim())}
          style={{
            width: '100%', marginTop: '10px', padding: '10px',
            backgroundColor: !currentVoter.trim() || hasVoted(currentVoter.trim()) ? '#d1d5db' : '#4f46e5',
            color: 'white', border: 'none', borderRadius: '4px'
          }}
        >
          Vote for {candidate.name}
        </button>
      )}
    </div>
  );
};

export default CandidateCard;
