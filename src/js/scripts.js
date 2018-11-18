function tshirtColor(color) {
  let currentBlock = document.querySelector('.color-block_current');
  let picture = document.getElementById('getIt');
  let clickedColorBlock = document.querySelector('.color-block_' + color);
  picture.setAttribute('src',"img/tshirts/tshirt_" + color + ".jpg" );
  currentBlock.classList.remove('color-block_current');
  clickedColorBlock.classList.add('color-block_current');

}
