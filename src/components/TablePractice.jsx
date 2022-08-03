import { memo, useState } from "react";

export const TablePractice = memo(() => {
  let typedata = [];
  // const Typedata = () => {
  let cntNo = 1;

  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    typedata.push({
      No: cntNo++,
      Name: String.fromCharCode([i]),
      Total: 0
    });
  }
  // }

  // const td = document.querySelectorAll("td");

  let [dataTotal, setDataTotal] = useState(0);

  // dataTotal= td[2];
  // HTMLTableCellElement.innerHTML
  // console.log(typedata[0].Total);
  console.log(dataTotal);

  const onClickTotal = () => {
    setDataTotal(dataTotal + 1);
  };

  const handleChange = (e) => {
    const { total } = e.target;
    setDataTotal(total + 1);
  };

  return (
    <div>
      <table border="1" width="500" cellPadding="0">
        <th>No</th>
        <th>Name</th>
        <th>Total</th>
        {typedata.map((tdpod) => (
          <tr key={tdpod.No}>
            <td>{tdpod.No}</td>
            <td>{tdpod.Name}</td>
            <td onClick={onClickTotal}>{dataTotal}</td>
          </tr>
        ))}
      </table>
    </div>
  );
});
