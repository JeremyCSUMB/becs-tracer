//<![CDATA[
    import { addExercise, Code, Frame, Terminal } from 'https://horstmann.com/codecheck/script/codecheck_tracer.js'
    addExercise(function*(sim, state) {
    
    if (state === undefined) { 
      state = {}
      state.num_of_hours = sim.randInt(10, 40)
      state.hourly_rate = sim.randInt(15, 30)
    }
    
    const code = sim.add(0, 0, new Code(`
    num_of_hours = ${state.num_of_hours}
    hourly_rate = ${state.hourly_rate}
    weekly_wage = num_of_hours * hourly_rate
    print("Weekly wage = %s", %weekly_wage)
    `))
    const vars = sim.add(0, 5, new Frame())
    yield sim.start(state)
    vars.num_of_hours = state.num_of_hours
    yield sim.next('Initialized num_of_hours at ' + state.num_of_hours)
    code.go(2) 
    vars.hourly_rate = state.hourly_rate
    yield sim.next('Initialized hourly_rate at ' + state.hourly_rate)
    code.go(3)
    yield sim.ask(vars.num_of_hours * vars.hourly_rate, 'What is the value of weekly_wage')
    vars.weekly_rate = vars.num_of_hours * vars.hourly_rate
    code.go(4)
    const term = sim.add(0, 8, new Terminal())
    term.println("Weekly wage = " + vars.num_of_hours * vars.hourly_rate)
    })
    // ]]>