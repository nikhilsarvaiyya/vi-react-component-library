let tHead = [
    { name: "Id", index : "id", validation : { type : "number"}, style : {background : "red", color : "white"}  },
    { name: "Image", index: "Image" , validation : { type : "image"} },
    { name: "DOB", index: "birth", validation : { type : "date",input : "dd-mm-yy"}, style : {background : "red", color : "white"} },
    { name: "Gender", index: "gender", validation : { type : 'boolean'}},
    { name: "Email", index: "EMAIL" , validation : { type : "email"} },
    { name: "Age", index: "age" , validation : { type : "number"} },
    { name: "FirstNAme", index: "FirstNAme", validation : { type : "string"} },
    { name: "Role", index: "role", validation : { type : "string"} }
]


export default tHead