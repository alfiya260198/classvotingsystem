import { VoteProvider } from './context/VoteContext';
import Header from './components/Header';
import Stats from './components/Stats';
import VoterInput from './components/VoterInput';
import AddCandidateForm from './components/AddCandidateForm';
import Controls from './components/Controls';
import CandidateList from './components/CandidateList';
import Results from './components/Results';

const App = () => (
  <VoteProvider>
    <div style={{ backgroundColor: '#f3f4f6', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white' }}>
        <Header />
        <Stats />
        <VoterInput />
        <AddCandidateForm />
        <Controls />
        <div style={{ padding: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>Candidates</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '10px'
          }}>
            <CandidateList />
          </div>
        </div>
        <Results />
      </div>
    </div>
  </VoteProvider>
);

export default App;
