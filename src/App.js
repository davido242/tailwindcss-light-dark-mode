
import {useState, useEffect} from 'react';

function App() {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    if(theme === 'dark') {
      document.body.classList.add("dark");
    }else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    };
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("items", theme);
  }, [theme]);


  useEffect(() => {
      let itemsMode = localStorage.getItem("items");
  if (itemsMode) {
   setTheme(itemsMode);
  }
}, []);

  const themesIcon = () => {
    if(theme === 'dark') {
      return (<img src="./images/light-svgrepo-com.svg" alt="switch" className="sun w-[50px] h-[50px] cursor-pointer py-2 bg-transparent dark:bg-white"/>);
    } else if(theme === 'light') {
      return (
        <img src="./images/dark-mode-night-moon-svgrepo-com.svg" alt="moon" className="moon w-[50px] h-[50px] cursor-pointer border-r-2 bg-white dark:bg-black border-slate-500 py-2"/>
      )
    };
  }

  return (
    <div className="App min-h-screen flex justify-center items-center bg-slate-300 dark:bg-black">      
      <header className="App-header rounded py-12 w-full">
        <div className="absolute top-8 right-8 flex justify-between border-2 border-slate-500 rounded-md" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {themesIcon()}          
        </div>
        <div className="max-w-[500px] mx-auto dark:bg-white bg-black p-4 rounded-2xl text-white dark:text-black">
          <h1 className="font-bold text-3xl py-4 text-center">Tailwind-React Dark Mode</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <a href="./" className="bg-white dark:bg-black text-black dark:text-white py-4 px-2 rounded-md inline-block my-4">Read More</a>
        </div>
      </header>
    </div>
  );
}

export default App;
