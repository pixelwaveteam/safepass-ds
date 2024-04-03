import { Button } from './components/ui/button';
import { Test } from './components/ui/test';

function App() {
  return (
    <>
      <div>
        <Test />
        <span className='text-sm bg-black text-yellow-50'>test local</span>
        <Button variant='outline'>Send</Button>
      </div>
    </>
  );
}

export default App;
