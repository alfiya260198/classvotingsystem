import React, { createContext, useState, useEffect, useContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  // Load initial state from localStorage or use default
  const loadFromStorage = (key, fallback) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  };

  const [candidates, setCandidates] = useState(() =>
    loadFromStorage('candidates', [
      { id: 1, name: 'Alex Johnson', votes: 0 },
      { id: 2, name: 'Sarah Miller', votes: 0 },
      { id: 3, name: 'Mike Chen', votes: 0 }
    ])
  );

  const [voters, setVoters] = useState(() =>
    loadFromStorage('voters', [])
  );

  const [currentVoter, setCurrentVoter] = useState('');
  const [votingActive, setVotingActive] = useState(() =>
    loadFromStorage('votingActive', true)
  );

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  useEffect(() => {
    localStorage.setItem('voters', JSON.stringify(voters));
  }, [voters]);

  useEffect(() => {
    localStorage.setItem('votingActive', JSON.stringify(votingActive));
  }, [votingActive]);

  const addVote = (id) => {
    setCandidates(prev =>
      prev.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c)
    );
  };

  const addCandidate = (name) => {
    setCandidates(prev => [...prev, { id: Date.now(), name, votes: 0 }]);
  };

  const removeCandidate = (id) => {
    setCandidates(prev => prev.filter(c => c.id !== id));
  };

  const addVoter = (name) => {
    setVoters(prev => [...prev, name]);
  };

  const resetAll = () => {
    const defaultCandidates = candidates.map(c => ({ ...c, votes: 0 }));
    setCandidates(defaultCandidates);
    setVoters([]);
    setCurrentVoter('');
    setVotingActive(true);

    // Also clear storage
    localStorage.removeItem('candidates');
    localStorage.removeItem('voters');
    localStorage.removeItem('votingActive');
  };

  const hasVoted = (name) => voters.includes(name);
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  return (
    <VoteContext.Provider value={{
      candidates,
      voters,
      currentVoter,
      setCurrentVoter,
      votingActive,
      setVotingActive,
      addVote,
      addCandidate,
      removeCandidate,
      addVoter,
      resetAll,
      hasVoted,
      totalVotes
    }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVote = () => {
  const context = useContext(VoteContext);
  if (!context) throw new Error("useVote must be used within VoteProvider");
  return context;
};
