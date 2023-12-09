import "./styles/App.scss";
import MainLayout from "./MainLayout/MainLayout";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <div className="mainMargin">
        <MainLayout>
          <MainRoutes />
        </MainLayout>
      </div>
    </>
  );
}

export default App;
