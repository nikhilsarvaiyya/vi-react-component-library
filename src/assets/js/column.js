let columns = [
  { label: "Id", accessor : "id", validation : { type : "number"}, style : {}  , visible: false},
  { label: "Image", accessor: "image" , validation : { type : "image"} , visible: false},
  { label: "India", accessor: "location" , validation : { type : "String", prepand : ""} , visible: false},
  { label: "Progress", accessor: "progress" , validation : { type : "progress"} , visible: true},
  { label: "DOB", accessor: "birthDate", validation : { type : "date", input : "mm:dd:yy"}, style : {} , visible: false},
  { label: "Gender", accessor: "gender", validation : { type : 'string'}},
  { label: "Salary", accessor: "salary", validation : { type : 'number', append : "", prepand : "$"}},
  { label: "Email", accessor: "email" , validation : { type : "email", subject:"Subject", body:"Hello sir/ madam,"} },
  { label: "Age", accessor: "age" , validation : { type : "number"} },
  { label: "FirstNAme", accessor: "firstName", validation : { type : "string"}, visible: true },
  { label: "Role", accessor: "role", validation : { type : "string"} }
]


export default columns