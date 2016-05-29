 var $buttons = $('span');
 var operator = null;
 var operatorUsedBefore = false;
 var result;

 $buttons.on('click', function(){
 var isOperator = $(this).hasClass('operator');
 var button = $(this);
 var display = $('#screen');


 if (button.text() === 'C') {
 display.text("");
 }

 if (button.text() === '=') {
 operatorUsedBefore = false;
 var expression = display.text().split(operator);

 if (operator === "+"){
  result = parseInt(expression[0]) + parseInt(expression[1]);
 display.text(result);
 }

 if (operator === "-"){
   result = parseInt(expression[0]) - parseInt(expression[1]);
 display.text(result);
 }

 if (operator === "x"){
  result = parseInt(expression[0]) * parseInt(expression[1]);
 display.text(result);
 }

 if (operator === "\xF7"){
  result = parseInt(expression[0]) / parseInt(expression[1]);
 display.text(result);
 }

 }

 if (isOperator && !operatorUsedBefore){
 if (button.text() !== 'C' && button.text() !== '='){
 operatorUsedBefore = true;
 operator = button.text();
 display.append(button.text());
 }
 }

 if(!isOperator) {
 display.append(button.text());
 }
});
