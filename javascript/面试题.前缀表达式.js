/**
 * 小明从小就喜欢数学，喜欢在笔记里记录很多表达式。
 * 他觉得现在的表达式写法很麻烦，为了提高运算符优先级，不得不添加很多括号。
 * 如果不小心漏了一个右括号的话，就差之毫厘，谬之千里了。
 * 因此他改用前缀表达式，例如把 (2 + 3) * 4写成* + 2 3 4，这样就能避免使用括号了。
 * 这样的表达式虽然书写简单，但计算却不够直观。请你写一个程序帮他计算这些前缀表达式。

在这个题目中，输入就是前缀表达式，输出就是计算的结果。
你可以假设除法为整除，即“5/3=1”。例如，
输入字符串为 + 2 3，输出 5；
输入字符串为 * + 2 2 3，输出为 12；
输入字符串为 * 2 + 2 3，输出为 10。

我们给出一些提示:
假设输入字符串为 * 2 + 2 3，即 2*(2+3)。
第一个字符为运算符号 *，它将对两个数字进行乘法。
如果后面紧接着的字符不全是数字字符，那就需要暂存下来，先计算后面的算式。
一旦后面的计算完成，就需要接着从后往前去继续计算。
*/

/**
 * 
 * @param {string} expression 需要计算的表达式
 */
function prefixExpression(expression) {
    var result = 1, operatorStack = [], digitStack = [], operators = ['+', '-', '*', '/'];
    var expressionArr = expression.trim().split(/\s+/);
    for (var i = 0; i < expressionArr.length; i++) {
        var val = expressionArr[i];
        if (operators.indexOf(val) != -1) { // 是操作符， 判断后面两位是不是操作数
            if (operators.indexOf(expressionArr[i + 1]) == -1 && operators.indexOf(expressionArr[i + 2]) == -1) {
                digitStack.push(eval(`${expressionArr[i + 1]} ${val} ${expressionArr[i + 2]}`));
                i += 2;
            } else {
                operatorStack.push(val);
            };
        } else {
            digitStack.push(val);
        };
    };
    while (operatorStack.length > 0) {
        var first = digitStack.pop();
        var second = digitStack.pop();
        digitStack.push(eval(`${first} ${operatorStack.pop()} ${second}`));
    };
    return digitStack[0];
};

// console.log(prefixExpression('* 2 + 2 3'))