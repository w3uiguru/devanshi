const tableBody = document.querySelector("#homeWorkTableContiner table tbody");
const tableRows = [];

for(let i = 0; i < downloads.length; i++){
    let row = `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${downloads[i].date !== undefined && downloads[i].date !== '' ? downloads[i].date : '-'}</td>
            <td>${downloads[i].description !== undefined && downloads[i].description !== '' ? downloads[i].description : '-'}</td>
            <td>${downloads[i].subject !== undefined && downloads[i].subject !== '' ? downloads[i].subject : '-'}</td>
            <td>
                ${
                    downloads[i].fileName !== undefined && downloads[i].fileName !== '' ? 
                    `<a href="${downloads[i].downloadLink}${downloads[i].fileName}"
                        title="${downloads[i].fileName}"
                        target="_blank">
                        ${downloads[i].fileName}
                    </a>`
                    : 'Download'
                }
            </td>
        </tr>
    `;
    tableRows.push(row);
}

tableBody.innerHTML = tableRows.join('');

