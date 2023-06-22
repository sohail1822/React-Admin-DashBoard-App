export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Sohail Shaikh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1@gmail.com",
    age: 21,
  },
  {
    id: 2,
    username: "Shubham Sarpate",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2@gmail.com",
    status: "passive",
    age: 21,
  },
  {
    id: 3,
    username: "Sarfaraz Hameed ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3@gmail.com",
    status: "pending",
    age: 21,
  },
  {
    id: 4,
    username: "Ayaz Farooqui",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 5,
    username: "Shashank Shekar Shukla",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Kaushal Shrivastav",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 7,
    username: "Saurabh Kumar",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 8,
    username: "Sahil Raj",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 9,
    username: "Mohd Kaif",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "9@gmail.com",
    status: "pending",
    age: 21,
  },
  {
    id: 10,
    username: "Salman Gulzar",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "12@gmail.com",
    status: "active",
    age: 21,
  },
  
];
