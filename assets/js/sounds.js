// assets/js/sounds.js
console.log("🔊 sounds.js cargado");

window.soundHover = new Howl({
  src: ['/assets/sounds/hover.mp3'],
  volume: 0.3,
  onloaderror: (id, err) => console.error("Howler load error:", err)
});
window.soundOpen = new Howl({ src: ['/assets/sounds/open.mp3'],  volume: 0.5 });
window.soundClose= new Howl({ src: ['/assets/sounds/close.mp3'], volume: 0.5 });
