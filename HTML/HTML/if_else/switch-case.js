let month = parseInt(prompt('month'))
switch (month = 1, 3, 5 , 7, 8, 10, 12 ? 31: month = 4, 6, 9, 11 ? 30: month = 2 ){
    case 31:
        document.write('tháng ' +month+ ' có 31 ngày');
        break;
    case 30:
        document.write("tháng " + month + ' có 30 ngày');
        break;
    default:
        document.write('tháng ' + month + 'có 28 hoặc 29 ngày');

}