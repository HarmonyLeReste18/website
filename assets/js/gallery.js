function onLoad() {
  const magicGrid = new MagicGrid({
    container: ".gallery",
    animate: true,
    gutter: 32,
    static: true,
    useMin: true,
  });

  magicGrid.listen();
}

window.addEventListener("load", onLoad);
