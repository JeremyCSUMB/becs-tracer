//<![CDATA[
    import { addExercise, Code, Frame } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
    addExercise(function*(sim, state) {
    
    if (state === undefined) { 
      state = {i: sim.randInt(1,30)}
    }
    
    const code = sim.add(0, 0, new Code(`
    i = ${state.i}
    while (i < ${state.i + 5}):
      print(i)
    `))

    const vars = sim.add(0, 2, new Frame())
    vars.i = state.i
    yield sim.start(state)
    code.go(2)
    while (vars.i < 15) {
      yield code.ask()
      code.go(3)
      yield sim.set(vars.i, vars.i+1)
      code.go(2)
    }
    })
    // ]]>