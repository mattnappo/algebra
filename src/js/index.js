var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;
$("#answer_output").hide();

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
    return {
        init : function(Args) {
            _args = Args;
            
            var raw_equation = document.getElementById("equation").value;

            if (raw_equation.indexOf('=') > -1) {
                
            } else {
                
            }

            solve_for = document.getElementById("solve_for").value;

            var left_side = algebra.parse(raw_equation[0]);
            var right_side = algebra.parse(raw_equation[1]);
        
            equation = new Equation(left_side, right_side);

            this.solve();
        },
        solve : function() {
            $("#answer_output").show();
            var answer = equation.solveFor(solve_for);
            document.getElementById("equation_header").innerHTML = equation.toString();
            document.getElementById("equation_answer").innerHTML = solve_for + " = " + answer;
    
        }
    };

}());