const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    const audio = document.getElementById(note);
    audio.currentTime = 1;
    audio.play();
  });
});
