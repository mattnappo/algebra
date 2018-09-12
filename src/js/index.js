var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

function execute() {
    var input_form = document.getElementById("input_form");
    if (input_form.checkValidity() === true) {
        SOLVER.init([]);
    }
}

var SOLVER = SOLVER || (function() {
    var _args = {}; // private
    var equation;
    var solve_for;
    var answer;
    return {
        init : function(Args) {
            _args = Args;
            
            var raw_equation = document.getElementById("equation").value;
            solve_for = document.getElementById("solve_for").value;
            try {
                if (raw_equation.indexOf('=') > -1) {
                    raw_equation = raw_equation.split("=");
                    var left_side = algebra.parse(raw_equation[0]);
                    var right_side = algebra.parse(raw_equation[1]);
                    equation = new Equation(left_side, right_side);
                    answer = equation.solveFor(solve_for);
                } else {
                    equation = algebra.parse(raw_equation);
                    console.log("expression: " + equation);
                    answer = equation;
                }
                this.solve();
            } catch {
                this.fail();
            }
            
        },
        solve : function() {
            $("#answer_output").show();
            document.getElementById("equation_header").innerHTML = equation;
            document.getElementById("equation_answer").innerHTML = solve_for + " = " + answer;
    
        },
        fail : function() {
            $("#answer_output").show();
            document.getElementById("equation_header").innerHTML = "Oops!";
            document.getElementById("equation_answer").innerHTML = "It looks like we couldn't solve that one!";
        }
    };

}());