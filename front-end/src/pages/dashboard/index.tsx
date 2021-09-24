import DataTable from "components/data-table";
import Footer from "components/footer";
import NavBar from "components/navbar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de eventos</h1>
          <p className="text-test h5 mb-5">Veja os próximos eventos públicos da Savinis.</p>
        <div className="py-3">
          <h2 className="text-primary">Listagem de eventos</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
