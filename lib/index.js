module.exports = function ({types: t}) {
    const isFunction = (node) => {
        return t.isFunctionExpression(node) || t.isArrowFunctionExpression(node)
    }

    const setLog = (statements, param) => {
        if(!Array.isArray(statements)) return
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

    return {
        name: 'catch-log2err',
        visitor: {
            CatchClause(path) {
                const {param, body} = path.node;
                const statements = body.body;
                setLog(statements, param)
            },
            CallExpression(path) {
                const {callee, arguments} = path.node
                if (t.isMemberExpression(callee) &&
                    t.isCallExpression(callee.object) &&
                    t.isIdentifier(callee.property, {name: 'catch'}) &&
                    isFunction(arguments[0])
                ) {
                    const {params, body} = arguments[0]
                    const statements = body.body;
                    if (params.length > 0) {
                        let param = params[0]
                        setLog(statements, param)
                    }
                }
            }
        }
    };
};
