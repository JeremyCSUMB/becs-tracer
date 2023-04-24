//<![CDATA[
    import { addExercise, Code, Frame } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
    addExercise(function*(sim, state) {
    
    if (state === undefined) { 
      state = {}
      state.a = sim.randInt(1, 9)
      if (state.a == 8) state.a = 10
      state.b = sim.randInt(1, 9)
      if (state.b == 8) state.b = 10
    }
    
    const code = sim.add(0, 0, new Code(`
    a = ${state.a}
    b = ${state.b}
    print(a + b) #Add Operator
    print(a - b) #Subtraction Operator
    print(a / b) #Division Operator
    print(a // b) #Floor Division Operator
    print(a * b) #Multiplication Operator
    print(a % b) #Modulo Operator
    print(a ** b) #Exponent Operator
    `))
    const vars = sim.add(0, 5, new Frame())
    yield sim.start(state)
    vars.a = state.a
    yield sim.next('Initialized a')
    code.go(2) 
    vars.b = state.b
    yield sim.next('Initialized b')
    code.go(3)
    yield sim.ask(vars.a + vars.b)
    code.go(4)
    yield sim.ask(vars.a - vars.b)
    code.go(5)
    yield sim.ask(vars.a / vars.b)
    code.go(6)
    yield sim.ask(Math.floor(vars.a / vars.b))
    code.go(7)
    yield sim.ask(vars.a * vars.b)
    code.go(8)
    yield sim.ask(vars.a % vars.b)
    code.go(9)
    yield sim.ask(vars.a ** vars.b)
    })
    // ]]>