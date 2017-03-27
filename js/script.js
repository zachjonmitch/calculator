function calcEvents(event) {
  var input = document.getElementById('values');
  var buttons = document.getElementsByTagName('li');
  
  if(buttons[0].id === event.target.id) {
    input.value = [""];
  }
  else if(buttons[1].id === event.target.id) {
    input.value = Math.sqrt(input.value);
  }
  else if(buttons[2].id === event.target.id) {
    input.value += '%';
  }
  else if(buttons[3].id === event.target.id) {
    input.value += '/';
  }
  else if(buttons[4].id === event.target.id) {
    input.value += 7;
  }
  else if(buttons[5].id === event.target.id) {
    input.value += 8;
  }
  else if(buttons[6].id === event.target.id) {
    input.value += 9;
  }
  else if(buttons[7].id === event.target.id) {
    input.value += '*';
  }
  else if(buttons[8].id === event.target.id) {
    input.value += 4;
  }
  else if(buttons[9].id === event.target.id) {
    input.value += 5;
  }
  else if(buttons[10].id === event.target.id) {
    input.value += 6;
  }
  else if(buttons[11].id === event.target.id) {
    input.value += '-'
  }
  else if(buttons[12].id === event.target.id) {
    input.value += 1;
  }
  else if(buttons[13].id === event.target.id) {
    input.value += 2;
  }
  else if(buttons[14].id === event.target.id) {
    input.value += 3;
  }
  else if(buttons[15].id === event.target.id) {
    input.value += '+';
  }
  else if(buttons[16].id === event.target.id) {
    input.value += 0;
  }
  else if(buttons[17].id === event.target.id) {
    input.value += '.';
  }
  else if(buttons[18].id === event.target.id) {
    input.value = eval(input.value);
  }
}; 