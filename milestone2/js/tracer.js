import { addExercise, Code, Frame, Terminal } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
addExercise(function*(sim, state) {

if (state === undefined) { 
  state = {}
}

const code = sim.add(0, 0, new Code(`
title = input()
print(title)
`))


const vars = sim.add(0, 3, new Frame())
yield sim.start(state)
vars.str = yield sim.ask('BECS','Enter the string \'BECS\':')
code.go(2)
const term = sim.add(0,6, new Terminal())
term.println(vars.str)
})

