import { useVote } from '../context/VoteContext';
import CandidateCard from '../components/CandidateCard';

const CandidateList = () => {
  const { candidates } = useVote();
  return (
    <>
      {candidates.map(candidate => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </>
  );
};

export default CandidateList;
