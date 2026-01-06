const tbody = document.getElementById("incidents");
let id = 1;

function createIncident() {
  const severities = ["high", "medium", "low"];
  const services = ["Auth", "Billing", "API", "Database"];

  const row = document.createElement("tr");
  const sev = severities[Math.floor(Math.random() * severities.length)];

  row.innerHTML = `
    <td>${id++}</td>
    <td>${services[Math.floor(Math.random() * services.length)]}</td>
    <td class="${sev}">${sev.toUpperCase()}</td>
    <td>Open</td>
  `;
  tbody.appendChild(row);
}
