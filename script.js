function showProfile(name) {
  document.getElementById('popup-name').innerText = name;
  document.getElementById('popup').classList.remove('hidden');
}
function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}