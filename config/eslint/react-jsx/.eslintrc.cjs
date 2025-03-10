module.exports = {
    rules: {
        "react/jsx-boolean-value": [2, "always"],
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                props: "never",
                children: "never",
                propElementValues: "always"
            }
        ],
        "react/jsx-curly-newline": [
            "error",
            {
                multiline: "consistent",
                singleline: "consistent"
            }
        ],
        "react/jsx-curly-spacing": [
            "error",
            {
                when: "always",
                attributes: true,
                children: true,
                allowMultiline: false,
                spacing: {
                    objectLiterals: "never"
                }
            }
        ],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-fragments": ["error", "syntax"],
        "react/jsx-handler-names": [
            "error",
            {
                eventHandlerPrefix: "handle",
                eventHandlerPropPrefix: "on",
                checkLocalVariables: true,
                checkInlineFunction: true
            }
        ],
        "react/jsx-indent": [
            "error",
            2,
            {
                checkAttributes: true,
                indentLogicalExpressions: true
            }
        ],
        "react/jsx-indent-props": ["error", 2],
        "react/jsx-key": [
            "error",
            {
                checkKeyMustBeforeSpread: true,
                warnOnDuplicates: true
            }
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                maximum: {
                    single: 3,
                    multi: 1
                }
            }
        ],
        "react/jsx-newline": [
            "error",
            {
                prevent: false
            }
        ],
        "react/jsx-no-bind": [
            "error",
            {
                ignoreDOMComponents: false,
                ignoreRefs: false,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: false
            }
        ],
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-useless-fragment": [
            "error",
            {
                allowExpressions: true
            }
        ],
        "react/jsx-one-expression-per-line": [
            "error",
            {
                allow: "single-child"
            }
        ],
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-tag-spacing": [
            "error",
            {
                closingSlash: "never",
                beforeSelfClosing: "always",
                afterOpening: "never",
                beforeClosing: "never"
            }
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens-new-line",
                condition: "parens-new-line",
                logical: "parens-new-line",
                prop: "parens-new-line"
            }
        ]
    }
};
