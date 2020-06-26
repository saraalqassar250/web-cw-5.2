first_number = parseInt(prompt("أدخل الرقم الأول: "));
second_number = parseInt(prompt("أدخل الرقم الثاني: "));
operation = prompt("اختر العملية (/ ،* ،- ،+): ");

if (first_number && second_number) {
  if (operation == "+") {
    let answer = first_number + second_number;
    console.log(" الجواب هو " + answer);
  } else if (operation == "-") {
    answer = first_number - second_number;
    console.log(" الجواب هو " + answer);
  } else if (operation == "*") {
    answer = first_number * second_number;
    console.log(" الجواب هو " + answer);
  } else if (operation == "/") {
    answer = first_number / second_number;
    console.log(" الجواب هو " + answer);
  } else {
    console.log(".عملية غير صحيحة. يرجى المحاولة مرة أخرى");
  }
} else {
  console.log(".الأرقام التي أدخلتها غير صحيحة. يرجى المحاولة مرة أخرى");
}
