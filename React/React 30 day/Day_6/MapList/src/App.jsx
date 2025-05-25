import './list.css';

function Title() {
  return (
    <div className='title'>
      <h1>30 Days Of React</h1>
      <p>Numbers Generator</p>
    </div>
  );
}

function Numbers() {
  let Arr = [];
  for (let i = 0; i <= 31; i++) {
    Arr.push(i);
  }

  const ArrN = Arr.map((e) => {
    let className = e % 2 === 0 ? 'even' : 'odd'; // Default: even or odd
    if (isPrime(e)) {
      className = 'prime'; // Override if prime
    }

    return (
      <li key={e} className={className}>
        {e}
      </li>
    );
  });

  return (
    <div className="cont">
      <ul>{ArrN}</ul>
    </div>
  );
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    };
  }
  return true;
}

function App() {
  return (
    <main>
      <Title />
      <Numbers />
    </main>
  );
}

export default App;
