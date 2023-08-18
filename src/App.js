import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
    
  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" country="in" pageSize={pageSize} category="general"/>}/>
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general1" country="in" pageSize={pageSize} category="general"/>}/>
          <Route exact path="entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" country="in" pageSize={pageSize} category="entertainment"/>}/>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" country="in" pageSize={pageSize} category="health"/>}/>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" country="in" pageSize={pageSize} category="science"/>}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" country="in" pageSize={pageSize} category="technology"/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" country="in" pageSize={pageSize} category="sports"/>}/>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" country="in" pageSize={pageSize} category="business"/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;