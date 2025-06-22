import { useVote } from '../context/VoteContext';

const Control = () => {
  const { votingActive, setVotingActive, resetAll } = useVote();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={() => setVotingActive(!votingActive)}
        style={{
          padding: '10px 20px',
          backgroundColor: votingActive ? '#dc2626' : '#16a34a',
          color: 'white', borderRadius: '4px', marginRight: '10px', border: 'none'
        }}
      >
        {votingActive ? 'End Voting' : 'Start Voting'}
      </button>

      <button onClick={resetAll} style={{
        padding: '10px 20px', backgroundColor: '#6b7280', color: 'white', borderRadius: '4px', border: 'none'
      }}>
        Reset All
      </button>
    </div>
  );
};

export default Control;
