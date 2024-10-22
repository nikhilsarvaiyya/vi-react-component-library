let tHead = [
    { label: "Id", accessor : "id", validation : { type : "number"}, style : {background : "cadetblue", color : "white"}  },
    { label: "Image", accessor: "image" , validation : { type : "image"} },
    { label: "DOB", accessor: "birthDate", validation : { type : "date",input : "dd-mm-yy"}, style : {background : "cadetblue", color : "white"} },
    { label: "Gender", accessor: "gender", validation : { type : 'boolean'}},
    { label: "Email", accessor: "email" , validation : { type : "email"} },
    { label: "Age", accessor: "age" , validation : { type : "number"} },
    { label: "FirstNAme", accessor: "firstName", validation : { type : "string"} },
    { label: "Role", accessor: "role", validation : { type : "string"} }
]


export default tHead