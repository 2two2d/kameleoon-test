module.exports = {
    rules: {
        "react/boolean-prop-naming": [
            "error",
            {
                rule: "^(is|should|has|can|did|will)[A-Z]([A-Za-z0-9]?)+",
                validateNested: true
            }
        ],
        "react/button-has-type": [
            "error",
            {
                button: true,
                submit: true,
                reset: true
            }
        ],
        "react/forbid-component-props": [
            "error",
            {
                forbid: ["style"]
            }
        ],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function"
            }
        ],
        "react/hook-use-state": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-array-index-key": "error",
        "react/no-danger": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-multi-comp": [
            "error",
            {
                ignoreStateless: false
            }
        ],
        "react/no-namespace": "error",
        "react/no-this-in-sfc": "error",
        "react/no-unstable-nested-components": [
            "error",
            {
                allowAsProps: false
            }
        ],
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": "error",
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true
            }
        ],
        "react/void-dom-elements-no-children": "error"
    }
};
