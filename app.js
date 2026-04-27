async function loadBirthdays() {
  const res = await fetch('/.netlify/functions/birthdays')
  const data = await res.json()

  document.getElementById('output').textContent =
    JSON.stringify(data, null, 2)
}
