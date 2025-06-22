import { useVote } from '../context/VoteContext';

const VoterInput = () => {
  const { currentVoter, setCurrentVoter, votingActive } = useVote();
  if (!votingActive) return null;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3>Enter Your Name to Vote</h3>
        <input
          type="text"
          value={currentVoter}
          onChange={(e) => setCurrentVoter(e.target.value)}
          placeholder="Your full name"
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {currentVoter && <p>Ready to vote as: <strong>{currentVoter}</strong></p>}
      </div>
    </div>
  );
};

export default VoterInput;
