# CalcString

The application implements an arithmetic expression interpreter. The input is a string representing a mathematical expression that can contain numbers, operators (+, -, *, /, ^) and parentheses.

The interpreter uses a parser to convert the expression into an abstract syntax tree, which represents the structure of the expression. A postfix evaluator traverses the tree, performing the operations in the correct order, according to the rules of operator precedence.

Auxiliary functions are responsible for performing each basic arithmetic operation. The main function provides the interface for the user, receiving the expression as input and returning the result of the evaluation.

## Funcionalits

-  Expression Evaluation: Calculates the result of complex mathematical expressions, such as (5+2)*3^2.
-  Multiple Operation Support: Processes multiple occurrences of the same operator in an expression, for example, 5+5+5.
-  Order of Precedence: Respects the standard order of mathematical operations (parentheses, exponentiation, multiplication and division, addition and subtraction).
-   Flexibility: Allows evaluation of complete expressions or specific parts.

## How Work

The package provides a main function that takes a string containing the mathematical expression and returns the numerical result. Internally, it uses efficient algorithms to parse the expression, identify the operators and operands, and apply the calculation rules.

## Benefits

-  Ease of Use: Simple and intuitive interface.
-  Accuracy: Reliable and accurate results.
-  Flexibility: Adapts to different types of mathematical expressions.
-  Extensibility: Can be easily expanded to include new mathematical functions.

## Exemple of use
        const calculator = require('calcstring');

        const resultado = calculator.calculator('(5+2)*3^2');
        console.log(resultado); // Output: 63