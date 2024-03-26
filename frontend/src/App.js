import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TranslatorPage from "./pages/TranslatorPage";
import TranslatorHistory from "./pages/TranslatorHistory";
import Layout from "./components/Layout";
import { useAuthContext } from "./hooks/useAuthContext";
import React, { useEffect, useState } from "react";




function App() {

  const { user, isLoading } = useAuthContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsReady(true);
    }
  }, [isLoading]);

  if (!isReady) {
    return null; 
  }

  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <>
          {!user ? (
          <>
            <Route path="/Login" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/Login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<TranslatorPage />} />
              <Route path="/home" element={<TranslatorPage />} />
              <Route path="/history" element={<TranslatorHistory/>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </>
        )}
        </>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
