const CACHE_KEY = 'CACHE_KEY';

const checkWebStorage = () => {
    return typeof(Storage) != null;
}


const putData = (data) => {
    let dataHistory = null;

    if(checkWebStorage()) {
        if(localStorage.getItem(CACHE_KEY) == null) {
            dataHistory = [];
        } else {
            dataHistory = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        dataHistory.unshift(data);

        if(dataHistory.length > 5) {
            dataHistory.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(dataHistory));
    }
}

const renderHistoryData = () => {
    let historyOfData = showData();

    let tableBody = document.querySelector('.table-body');
    tableBody.innerHTML = "";

    for(let index=0; index <= historyOfData.length-1; index++) {
        
        let row = document.createElement('tr');
        row.innerHTML = `<td> ${historyOfData[index].score} </td>`;
        row.innerHTML += `<td> ${historyOfData[index].dateExam} </td>`;
      
       tableBody.appendChild(row);
    }

}

const showData = () => {
    if(localStorage.getItem(CACHE_KEY) != null) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}
renderHistoryData();

export {renderHistoryData,putData,showData}