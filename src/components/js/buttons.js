function initButtons() {
  const bookButtons = document.querySelectorAll('.button');
  bookButtons.forEach(button => {
    button.addEventListener('click', onBook);
  });
}

function onBook() {
  window.open('https://bookingengine.myguestdiary.com/1184', 'mill_room_booking');
}

export default initButtons;