// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import CloudDevOpsService from "./pages/Index";

// function App() {
//   return <CloudDevOpsService />;
// }

// export default App;
// import { CloudDevOps } from "./pages/CloudDevOps";

// const App = () => {
//   return (
//     <div className="w-full overflow-x-hidden">
//       <CloudDevOps />
//     </div>
//   );
// };

// export default App;

import { CloudDevOpsPage } from "./components/cloud-devops";

const App = () => {
  return <CloudDevOpsPage />;
};

export default App;


