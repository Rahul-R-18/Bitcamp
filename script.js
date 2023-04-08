const grayBorders = document.querySelectorAll('.border.layer1, .border.layer2, .border.layer3, .border.layer4');

const colors = ['brown', 'lightblue', 'grey'];

grayBorders.forEach(border => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  border.style.backgroundColor = randomColor;
});

const sideBorders = document.querySelectorAll('.sideborder.sidelayer1, .sideborder.sidelayer2, .sideborder.sidelayer3');
sideBorders.forEach(border => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    border.style.backgroundColor = randomColor;
  });




