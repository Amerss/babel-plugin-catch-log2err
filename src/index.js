module.exports = function ({types: t}) {
    return {
        name: 'babel-plugin-catch',
        visitor: {
            CatchClause(path) {
                const {param, body} = path.node;
                const statements = body.body;

                statements.forEach((statement) => {
                    const {expression} = statement;
                    if (
                        t.isCallExpression(expression) &&
                        t.isMemberExpression(expression.callee) &&
                        t.isIdentifier(expression.callee.object, {name: 'console'}) &&
                        t.isIdentifier(expression.callee.property, {name: 'log'}) &&
                        statement.expression.arguments.some((arg) => t.isIdentifier(arg, {name: param?.name}))
                    ) {
                        statement.expression.callee.property = t.identifier('error');
                    }
                });
            }
        }
    };
};
