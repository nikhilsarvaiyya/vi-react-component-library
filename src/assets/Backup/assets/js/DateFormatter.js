const DateFormatter = (date,type) => {
    let formatted = "NA"
    const today = new Date(date);
    if(today == "Invalid Date"){
       return formatted
    }
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // month is zero-based
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    let club = "";

    switch (type?.validation?.input) {
        case 'dd-mm-yy': club = dd + '-' + mm + '-' + yyyy;break;
        case 'dd/mm/yy': club = dd + '/' + mm + '/' + yyyy;break;
        case 'dd:mm:yy': club = dd + ':' + mm + ':' + yyyy;break;
        case 'mm-dd-yy': club = mm + '-' + dd + '-' + yyyy;break;
        case 'mm/dd/yy': club = mm + '/' + dd + '/' + yyyy;break;
        case 'mm:dd:yy': club = mm + ':' + dd + ':' + yyyy;break;
        case 'yy-mm-dd': club = yyyy + '-' + mm + '-' + dd;break;
        case 'yy/mm/dd': club = yyyy + '/' + mm + '/' + dd;break;
        case 'yy:mm:dd': club = yyyy + ':' + mm + ':' + dd;break;
       
        default:
             club = dd + '/' + mm + '/' + yyyy;
            break;
    }

    formatted = club
    return formatted
}

export default DateFormatter