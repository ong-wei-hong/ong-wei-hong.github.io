import About from './About';
import Background from './Background';

function App() {
  return (
    <div
      style={{
        margin: '0',
        width: '100%',
        height: '100%'
      }}
    >
      <div
        style={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <About />
        <Background />
      </div>
    </div>
  );
}

export default App;
