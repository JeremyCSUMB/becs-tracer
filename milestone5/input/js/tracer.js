//<![CDATA[
    import { addExercise, Code, Frame, Terminal } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
    addExercise(function*(sim, state) {
    
    if (state === undefined) { 
      state = {}
    }
    
    const code = sim.add(0, 0, new Code(`
    print('What is your name?')
    name = input()
    print('Hello ' + name)
    `))
    const vars = sim.add(0, 3, new Frame())
    const term = sim.add(0, 5, new Terminal())

    yield sim.start(state)
    code.go(2)
    term.println('What is your name?')
    vars.name = yield term.ask()
    code.go(3)
    term.input()
    term.println('Hello ' + vars.name)
    })
    // ]]>