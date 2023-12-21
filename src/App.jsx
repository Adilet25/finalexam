import "./styles/App.scss";
import MainLayout from "./MainLayout/MainLayout.jsx";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";

function App() {
  return (
    <>
      <div className="mainMargin">
        <AuthContextProvider>
          <MainLayout>
            <MainRoutes />
          </MainLayout>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
