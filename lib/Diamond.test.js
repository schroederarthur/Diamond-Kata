
const { giveDiamond } = require('./Diamond.js')

describe('diamond', () => {
    describe('gives Diamond', () => {

        it('example A', () => {
            expect(giveDiamond("A")).toBe("A")
        })

        it('example B', () => {
            expect(giveDiamond("B")).toBe(" A \n" +
                "B B\n" +
                " A ")
        })

        it('example E', () => {
            expect(giveDiamond("E")).toBe("    A    \n" +
                "   B B   \n" +
                "  C   C  \n" +
                " D     D \n" +
                "E       E\n" +
                " D     D \n" +
                "  C   C  \n" +
                "   B B   \n" +
                "    A    ")
        }) 
    }) 
}) 