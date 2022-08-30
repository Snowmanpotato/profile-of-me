let students = [
    {
        Name: 'Nguyễn Văn A',
        dob: '01/01/2001',
        id: 13456789,
        Gender: 'nam',
        Img: ''
    }
];
function array() {
    let mang = [];
    for (i = 0; i < students.length; i++) {
        mang.push(`<tr>
                <td id='td1${i}' td1>${i + 1}</td>
                <td id='td2${i}'>${students[i].Name}</td>
                <td id='td3${i}'>${students[i].dob}</td>
                <td id='td4${i}'>${students[i].id}</td>
                <td id='td5${i}'>${students[i].Gender}</td>
                <td id='td6${i}'>${students[i].Img}</td>
                <td>
                <button onclick='del(${i})'>Xóa</button>
                <button onclick='fix(${i})'>Sửa</button>
                <button onclick='save(${i})'>Lưu</button>
                </td>
             </tr>`)
    }
    return document.querySelector('tbody').innerHTML = mang.join('');
}
array();

function add(){
    let name = document.querySelector('#name').value;
    let date = document.querySelector('#age').value;
    let ID = document.querySelector('#ID').value;
    let gender = document.querySelector('#gender').value;
    let adds = {
        Name: name,
        dob: date,
        id: ID,
        Gender: gender    
    }
    students.push(adds);
    array();
}
function del(index) {
    students.splice(index,1);
    array();
}
function fix(index) {
    document.querySelector(`#td2${index}`).innerHTML = `<input type="text" value='${students[index].Name}'>`;
    document.querySelector(`#td3${index}`).innerHTML = `<input type="text" value='${students[index].dob}'>`;
    document.querySelector(`#td4${index}`).innerHTML = `<input type="text" value='${students[index].id}'>`;
    document.querySelector(`#td5${index}`).innerHTML = `<input type="text" value='${students[index].Gender}'>`;
    document.querySelector(`#td6${index}`).innerHTML = `<input type="text" value='${students[index].Img}'>`;
}
function save(index) {
    students[index].Name = document.querySelector(`#td2${index}>input`).value;
    students[index].dob = document.querySelector(`#td3${index}>input`).value;
    students[index].id = document.querySelector(`#td4${index}>input`).value;
    students[index].Gender = document.querySelector(`#td5${index}>input`).value;
    students[index].Img = document.querySelector(`#td6${index}>input`).value;
    array();
}
