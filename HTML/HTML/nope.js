let houseWork = [
    'quét nhà',
    'rửa bát',
    'nấu cơm',
    'đón con',
    'cho gà ăn',
    'lau nhà',
    'giặt áo quần',
    'phơi áo quần',
    'quét sân',
    'tưới cây'
];
let job = document.querySelector('#job');
for (let w = 0; w < houseWork.length; w++) {
    job.innerHTML += `<tr>
                        <td>${w + 1}</td>
                        <td>${houseWork[w]}</td>
                    </tr>`
}
