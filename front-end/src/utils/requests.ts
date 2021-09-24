export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3001";

export const PostData = () => {
  $.getJSON(
    "http://localhost:3001/eventos?page=0&size=20&sort=date,desc",
    function (data) {
      console.log(data);
      
    }
  );
};
