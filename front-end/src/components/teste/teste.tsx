async function JSONLoader(url: any, table: any) {
  const tableHead = document.querySelector("thead")
  const tableBody = document.querySelector("tbody");
  const response = await fetch(url);
  const { headers, rows } = await response.json();

  tableHead!.innerHTML = "<tr></tr>";
  tableBody!.innerHTML = "";

  for (const headerText of headers) {
    const headerElement = document.createElement("th");

    headerElement.textContent = headerText;
    tableHead!.querySelector("tr")!.appendChild(headerElement);
  }
}

JSONLoader(
  "../../../../back-end/db.json",
  document.querySelector("table")
);

const Testez = () => {
  return (
    <>
      <table id="myTable" className="table table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data do evento</th>
            <th>Nome do evento</th>
            <th>Participantes</th>
            <th>Horário de início</th>
            <th>Horário de término</th>
          </tr>
        </thead>
        <tbody id="tBody">
        </tbody>
      </table>
    </>
  );
};

export default Testez;
