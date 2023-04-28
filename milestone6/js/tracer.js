//<![CDATA[
import { addExercise, Code, Frame, Terminal } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
addExercise(function* (sim) {

  const code = sim.add(0, 0, new Code(`
    first_num = int(input('Enter the first number: '))
    second_num = int(input('Enter the second number: '))
    sum = first_num + second_num
    if sum >= 22:
      print('The sum is greater than or equal to 22.')
    else:
      print('The sum is less than 22.')
    `))

  const vars = sim.add(0, 3, new Frame())
  const term = sim.add(0, 6, new Terminal())

  yield sim.start()
  term.print('Enter the first number: ')
  vars.first_num = yield term.ask(undefined, 'Enter the first number: ')
  code.go(2)
  term.print('Enter the second number: ')
  vars.second_num = yield term.ask(undefined, 'Enter the second number: ')
  code.go(3)
  vars.sum = yield sim.ask(parseInt(vars.first_num) + parseInt(vars.second_num), 'Enter the sum: ')
  code.go(4)
  yield sim.next('This conditional statement checks whether the sum provided is greater than or equal to 22.')
  if (vars.sum >= 22) {
    code.go(5)
    yield sim.next('In this case, ' + vars.sum + ' is greater than or equal to 22.')
    term.println('The sum is greater than or equal to 22.')
    yield sim.next('The code inside the if statement will be executed.')
  } else {
    code.go(5)
    yield sim.next('In this case, ' + vars.sum + ' is less than 22. We will go to our else statement.')
    code.go(7)
    term.println('The sum is less than 22.')
    yield sim.next('The code inside our else statement will be executed.')
  }

})
    // ]]>