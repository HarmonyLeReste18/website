function onLoad() {
  const magicGrid = new MagicGrid({
    container: ".gallery",
    animate: true,
    gutter: 0,
    static: true,
    useMin: true,
  });

  magicGrid.listen();
}

window.addEventListener("load", onLoad);
