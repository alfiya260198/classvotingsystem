import { useVote } from '../context/VoteContext';

const Results = () => {
  const { candidates, votingActive, totalVotes } = useVote();
  if (votingActive || totalVotes === 0) return null;

  const winner = candidates.reduce((a, b) => a.votes > b.votes ? a : b);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        backgroundColor: '#fef3c7', border: '2px solid #fbbf24',
        borderRadius: '8px', padding: '20px', textAlign: 'center'
      }}>
        <h2>🏆 Winner: {winner.name}</h2>
        <p>{winner.votes} votes ({Math.round((winner.votes / totalVotes) * 100)}%)</p>
      </div>
    </div>
  );
};

export default Results;
