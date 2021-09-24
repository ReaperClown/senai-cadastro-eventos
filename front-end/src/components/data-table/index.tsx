import axios from "axios";
import Pagination from "components/pagination";
import Testez from "components/teste/teste";
import moment from "moment";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { EventPage } from "../../types/event";

const DataTable = () => {

  async function getUser(z: any) {
    let response = await fetch(`http://localhost:3001/eventos?page=0&size=20&sort=date,desc`);
    let userData = await response.json();
    return userData.nomeEvento; // não é necessário o await no return
   }

   console.log(getUser);
   

  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<EventPage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/eventos?page=0&size=20&sort=date,desc`)
      .then((response) => {
        setPage(response.data);
      });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive">
        <Testez />
      </div>
    </>
  );
};

export default DataTable;
