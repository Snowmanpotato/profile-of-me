const jobs = ["Lau nhà", "Rửa chén", "Nấu cơm", "Đón con", "Gặt áo quần"];
function showJob() {
    let htmls = jobs.map(function (job, index) {
        return `<tr>
                    <td>${index + 1}</td>
                    <td>${job}</td>
                    <td>
                    <button>Done</button>
                    </td>
                </tr>
                `
    })

}

