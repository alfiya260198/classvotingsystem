import { useVote } from '../context/VoteContext';

const Stats = () => {
  const { candidates, voters, totalVotes } = useVote();
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#f8f9fa' }}>
      {[
        { label: 'Candidates', value: candidates.length, color: '#4f46e5' },
        { label: 'Total Votes', value: totalVotes, color: '#16a34a' },
        { label: 'Voters', value: voters.length, color: '#dc2626' }
      ].map(stat => (
        <div key={stat.label} style={{ textAlign: 'center' }}>
          <h3 style={{ margin: 0, color: stat.color }}>{stat.label}</h3>
          <p style={{ margin: '5px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
