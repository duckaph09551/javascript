const handlePeriod = (period, dateString, month) => {
    if (month === 0) {
        const currentDate = new Date(dateString);
        period.push(
            `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
        );
    } else {
        const pre = new Date(dateString);
        let month = pre.getMonth() + 2,
            year = pre.getFullYear(),
            date = pre.getDate();
        if (month > 12) {
            month = 1;
            year += 1;
        }
        const currentDate = new Date(`${year}-${month}-${date}`);
        period.push(
            `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
        );
    }
    return period[month];
};

document.querySelector(".handle").addEventListener("click", (event) => {
    event.preventDefault();
    //clear table
    document.querySelector("tbody").innerHTML = "";
    //TODO: so tien vay
    const loan = Number(document.getElementById("loan").value);
    //TODO: thoi han vay theo thang
    const months = Number(document.getElementById("months").value);
    //TODO: lai xuat cho vay
    const rate = Number(document.getElementById("rate").value);
    //TODO: ngay giai ngan
    const disbursementDate = document.getElementById("disbursementDate").value;
    //TODO: so tien lai phai tra
    const totalInterest = Math.round((loan * months * rate) / 1200);
    //TODO: SO TIEN GOC VA LAI PHAI TRA
    const totalOriginalAndInterest = loan + totalInterest;
    //
    document.getElementById("interest").value = totalInterest.toLocaleString();
    document.getElementById(
        "originalAndInterest"
    ).value = totalOriginalAndInterest.toLocaleString();

    const period = [];

    for (let i = 0; i <= months; i++) {
        let html;
        if (i === 0) {
            html = `
                  <td>${i}</td>
                  <td>${handlePeriod(period, disbursementDate, i)}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               `;
        } else if (i === months) {
            //tra goc hang thang
            const soTienVayCacThang = Math.round(loan / months);
            const originalPerMonth = loan - soTienVayCacThang * (months - 1);
            // tra lai hang thang
            const interestPerMonth =
                totalInterest - Math.round((loan * rate) / 1200) * (months - 1);
            /*
                                                                       tháng cuối cùng = tổng vay - số tiền vay các tháng * các tháng trước
                                                                        vd tháng cuối = 5  => * cho 4

                                                                      */
            // tra goc va lai
            const originalAndInterestPerMonth = originalPerMonth + interestPerMonth;
            // goc con lai
            const remainingOriginal = Math.round(loan - originalPerMonth * i);

            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, period[i - 1], i)}</td>
            <td>${originalPerMonth.toLocaleString()}</td>
            <td>${interestPerMonth.toLocaleString()}</td>
            <td>${originalAndInterestPerMonth.toLocaleString()}</td>
            <td>0</td>
            `;
        } else {
            //tra goc hang thang
            const originalPerMonth = Math.round(loan / months);
            // tra lai hang thang
            const interestPerMonth = Math.round((loan * rate) / 1200);
            // tra goc va lai
            const originalAndInterestPerMonth = originalPerMonth + interestPerMonth;

            // goc con lai
            const remainingOriginal = Math.round(loan - originalPerMonth * i);

            html = `
                     <td>${i}</td>
                     <td>${handlePeriod(period, period[i - 1], i)}</td>
                     <td>${originalPerMonth.toLocaleString()}</td>
                     <td>${interestPerMonth.toLocaleString()}</td>
                     <td>${originalAndInterestPerMonth.toLocaleString()}</td>
                     <td>${remainingOriginal.toLocaleString()}</td>
                     `;
        }
        const tr = document.createElement("tr");
        tr.innerHTML = html;
        document.querySelector("table tbody").appendChild(tr);
    }
});