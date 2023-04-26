//<![CDATA[
    import { addExercise, Code, Frame } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
    addExercise(function*(sim, state) {
    
    if (state === undefined) { 
      state = {}
      state.a = sim.randInt(1, 10)
      state.b = sim.randInt(1, 10)
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
    yield sim.next('Use the Addition Operator')
    yield sim.ask(vars.a + vars.b)
    code.go(4)
    yield sim.next('Use the Subtraction Operator')
    yield sim.ask(vars.a - vars.b)
    code.go(5)
    yield sim.next('Use the Division Operator')
    yield sim.ask(vars.a / vars.b)
    code.go(6)
    yield sim.next('Use the Floor Dvision Operator')
    yield sim.ask(Math.floor(vars.a / vars.b))
    code.go(7)
    yield sim.next('Use the Multiplication Operator')
    yield sim.ask(vars.a * vars.b)
    code.go(8)
    yield sim.next('Use the Modulo Operator')
    yield sim.ask(vars.a % vars.b)
    code.go(9)
    yield sim.next('Use the Exponent Operator')
    yield sim.ask(vars.a ** vars.b)
    })
    // ]]>