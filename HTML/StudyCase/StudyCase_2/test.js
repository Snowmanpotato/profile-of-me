//tạo mảng chứa object
let students = [
    {
        code: '2513684',
        name: 'Đặng Phước Duy',
        dob: '01/01/1999',
        gender: 'Nam',
        clas: 'C0722H1',
        tel: '0959959595',
        mail: 'duy@gmail.com',
        pic: ''
    }
];
//tạo hàm in dữ liệu trong mảng stdents
function renderStudents() {
    let htmls = students.map(function (student, index) {
        return `
            <tr>
                <td>${index +1}</td>
                <td>${student.code}</td>
                <td>${student.name}</td>
                <td>${student.dob}</td>
                <td>${student.gender}</td>
                <td>${student.clas}</td>
                <td>${student.tel}</td>
                <td>${student.mail}</td>
                <td>${student.pic}</td>              
            </tr>
            `;
    })
    document.querySelector(`.table2>tbody`).innerHTML = htmls.join('');
}
renderStudents();

