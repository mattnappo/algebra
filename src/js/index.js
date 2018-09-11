var SOLVER = SOLVER || (function() {
    var _args = {}; // private
    var equation;
    var solve_for;
    var expression;
    return {
        init : function(Args) {
            _args = Args;
            equation = document.getElementById("equation");
            solve_for = document.getElementById("solve_for");
            expression = new Expression(equation);
            this.solve();
        },
        solve : function() {
            var answer = eq.solveFor("x");
            console.log(answer);
        }
    };

}());