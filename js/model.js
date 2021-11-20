
const CACHE_KEY = 'cache_key';
// Model, all dealing with datebase code here

const checkWebStorage = () => { 
    return typeof(Storage) != null;
}


const putData = (data) => {
    let historiesData = null;
    if(checkWebStorage()) {
        if(localStorage.getItem(CACHE_KEY) == null) {
                historiesData = [];
        } else {
            historiesData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historiesData.unshift(data);

        if(historiesData.length > 5) {
            historiesData.pop();
        }

        localStorage.setItem(CACHE_KEY,JSON.stringify(historiesData));
    }
}

const showData = () => {
    if(checkWebStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];    
    } else {
        [];
    }
}

const renderData = () => {
    let HistoryData = showData();

    const tableBody = document.querySelector('.bodyTable');
    tableBody.innerHTML = "";

    for(let index = 0; index <= HistoryData.length-1; index++) {
            const row = document.createElement('tr');
            row.innerHTML = `<td> ${HistoryData[index].namauser} </td>`;
            row.innerHTML += `<td> ${HistoryData[index].userdate} </td>`;
            row.innerHTML += `<td> ${HistoryData[index].scoreuser} </td>`;

            tableBody.appendChild(row);
    }

}

export {putData,renderData};