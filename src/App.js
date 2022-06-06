import About from './About';
import Background from './Background';

function App() {
  return (
    <div>
      <Background />
      <div
        style={{
          margin: '0',
          width: '100vw',
          height: '100vh'
        }}
      >
        <About />
      </div>
    </div>
    
  );
}

export default App;
