//<![CDATA[
    import { addExercise, Code, Frame } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
    addExercise(function*(sim, state) {
    
    if (state === undefined) { 
      state = {}
      state.i = sim.randInt(1,30)
    }
    
    const code = sim.add(0, 0, new Code(`
    i = ${state.i}
    while (i < ${state.i + 5}):
      print(i)
    `))
    const vars = sim.add(0, 5, new Frame())
    yield sim.start(state)
    while (vars.i < vars.i+5) {
      yield code.ask()
    }
    })
    // ]]>