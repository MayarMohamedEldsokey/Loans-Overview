  const loans = [
    {id: '4857', amount: 100000, left: 40500, duration: '8 Months', interest: '12%', installment: 2000},
    {id: '4778', amount: 500000, left: 250000, duration: '36 Months', interest: '10%', installment: 8000},
    {id: '9877', amount: 900000, left: 40500, duration: '12 Months', interest: '12%', installment: 5000},
    {id: '1577', amount: 50000, left: 40500, duration: '25 Months', interest: '5%', installment: 2000},
    {id: '6658', amount: 50000, left: 40500, duration: '5 Months', interest: '16%', installment: 10000},
    {id: '1475', amount: 80000, left: 25500, duration: '14 Months', interest: '8%', installment: 2000},
    {id: '1573', amount: 12000, left: 5500, duration: '9 Months', interest: '13%', installment: 500},
    {id: '6695', amount: 160000, left: 100800, duration: '3 Months', interest: '12%', installment: 900},
  ];

  const tbody = document.getElementById("loanTableBody");
  let totalLoan = 0, totalLeft = 0, totalInstallment = 0;

  loans.forEach(loan => {
    totalLoan += loan.amount;
    totalLeft += loan.left;
    totalInstallment += loan.installment;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${loan.id}</strong></td>
      <td>$${loan.amount.toLocaleString()}</td>
      <td>$${loan.left.toLocaleString()}</td>
      <td>${loan.duration}</td>
      <td>${loan.interest}</td>
      <td>$${loan.installment.toLocaleString()} / month</td>
      <td><button class="repay-btn">Repay</button></td>
    `;
    tbody.appendChild(tr);
  });
  

  document.getElementById("totalLoan").innerText = "$" + totalLoan.toLocaleString();
  document.getElementById("totalLeft").innerText = "$" + totalLeft.toLocaleString();
  document.getElementById("totalInstallment").innerText = "$" + totalInstallment.toLocaleString() + " / month";