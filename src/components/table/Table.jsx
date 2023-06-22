import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "MacBook Air 13-M2",
      img: "https://www.apple.com/v/mac/compare/x/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_medium_2x.jpg",
      customer: "Sohail Shaikh",
      date: "15 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "MacBook Air 13-M1",
      img: "https://www.apple.com/v/mac/compare/x/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_medium_2x.jpg",
      customer: "Sohail Shaikh",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "MacBook Pro 13-M2",
      img: "https://www.apple.com/v/mac/compare/x/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_medium_2x.jpg",
      customer: "Sohail Shaikh",
      date: "14 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "MacBook Pro 14-M2",
      img: "https://www.apple.com/v/mac/compare/x/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_medium_2x.jpg",
      customer: "Sohail Shaikh",
      date: "17 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "MacBook Pro 15-M2",
      img: "https://www.apple.com/v/mac/compare/x/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_medium_2x.jpg",
      customer: "Sohail Shaikh",
      date: "20 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "MacBook Pro 16-M2",
      img: "https://www.apple.com/v/mac/compare/x/images/overview/compare_macbook_air_m2_silver__du98vzvmqymq_medium_2x.jpg",
      customer: "Sohail Shaikh",
      date: "27 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
