// // import { useState } from 'react'

// import { Button } from './components/ui/button';

// // import './App.css';

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className='text-3xl'>Helllo shad cn</h1>
//       <Button variant={'default'} className=' bg text-foreground'>
//         Hello
//       </Button>
//       <h2 className='text-primary bg-foreground'> Quora</h2>
//     </>
//   );
// }

// export default App;
// import { useState } from 'react'

import { Button } from './components/ui/button';

// import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className='flex flex-col items-center justify-center bg-foreground text-muted py-16 px-6 sm:px-8 lg:px-16'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl font-extrabold text-pretty  mb-6'>
            Supercharge Your Projects with AI-Driven Insights
          </h1>
          <p className='text-lg sm:text-xl  mb-8'>
            Leverage the power of artificial intelligence to streamline your
            project management. Improve team collaboration, track progress, and
            predict project outcomes like never before.
          </p>
          <div className='flex justify-center gap-4 flex-wrap sm:flex-nowrap'>
            <Button variant={'default'} className='px-8 py-3 text-lg'>
              Get Started
            </Button>
            <Button variant={'secondary'} className='px-8 py-3 text-lg'>
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
