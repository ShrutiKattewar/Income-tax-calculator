var forms = document.querySelectorAll(".needs-validation");
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      event.preventDefault();
      event.stopPropagation();
    } else {
      const grossIncome = parseFloat(
        document.getElementById("gross-income").value
      );
      const extraIncome = parseFloat(
        document.getElementById("extra-income").value
      );
      const ageGroup = parseFloat(document.getElementById("age-group").value);
      const deductions = parseFloat(
        document.getElementById("deductions").value
      );
      const totalIncome = grossIncome + extraIncome;
      const netIncome = totalIncome - deductions;
      if (netIncome <= 800000) {
        finalIncome = netIncome;
      } else {
        if (ageGroup < 40) {
          finalIncome = (30 * (netIncome - 800000)) / 100;
        } else if (ageGroup >= 40 && ageGroup < 60) {
          finalIncome = (40 * (netIncome - 800000)) / 100;
        } else if (ageGroup >= 60) {
          finalIncome = (10 * (netIncome - 800000)) / 100;
        }
      }
      document.getElementById("finalIncome").innerHTML = finalIncome;
      event.preventDefault();
      event.stopPropagation();
      myModal.show();
    }
  });
});

document.getElementById("close").addEventListener("click", displayDate);

function displayDate() {
  location.reload();
}
