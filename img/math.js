assEq = (testName, fun, ins, b) => 
    fun(...ins) !== (b ?? true) ? 
        `${testName} ${ins} = ${fun(...ins)} != ${b ?? true} (FAILED)` : 
        `${testName} ${ins} = ${b ?? true} (OK)`

htmj = arr => arr.join("<br/>")

lastDigit = n => parseInt(n.toString()[n.toString().length - 1])

digits = n => n.toString().split('').map(s => parseInt(s))

longRem = (a, b) => 
    a >= b ? 
        longRem(a - b, b) : 
        a;

divisible = (a, b) => 
    /*a > 10 ? 
        null : */
    b == 2 ? 
        [0, 2, 4, 6, 8].includes(lastDigit(a)) : 
    b == 3 ? 
        (a > 10 ? 
            divisible(digits(a).reduce((a, v) => a + v), 3) : 
            longRem(a, 3) === 0) : 
    b == 5 ? 
        [0, 5].includes(lastDigit(a)) : 
    b == 6 ? 
        divisible(a, 2) && divisible(a, 3) : 
    b == 10 ? 
        lastDigit(a) === 0 : 
    false

divisibleTests = () => 
    [
        assEq('Divisible1',  divisible, [20, 10]), 
        assEq('Divisible1b', divisible, [31, 10], false), 
        assEq('Divisible2',  divisible, [4, 2]), 
        assEq('Divisible2b', divisible, [5, 2], false), 
        assEq('Divisible1b', divisible, [31, 10], false), 
        assEq('Divisible3',  divisible, [15, 5]), 
        assEq('Divisible3b', divisible, [19, 5], false), 
        assEq('Divisible1b', divisible, [31, 10], false), 
        assEq('Divisible4',  divisible, [12, 6]), 
        assEq('Divisible4b', divisible, [13, 6], false), 
        assEq('Divisible1b', divisible, [31, 10], false), 
        assEq('Divisible5',  divisible, [18, 3]), 
        assEq('Divisible5b', divisible, [17, 3], false), 
    ]

primeFac = (n) => {
    return n+1
}

longRemTests = () => 
    [
        assEq('LongRem1', longRem, [10, 3], 1), 
        assEq('LongRem2', longRem, [12, 4], 0), 
        assEq('LongRem3', longRem, [203, 17], 16)
    ]

primeFacTests = () => 
    [
        assEq('PrimeFac1', primeFac, [87], 88), 
    ].filter(x => x)

tests = () => 
    [
        longRemTests(), 
        divisibleTests(), 
        primeFacTests()
    ].flat()

console.log(tests())