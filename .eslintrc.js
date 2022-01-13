module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prefer-const': 0,
    'dot-notation': 0,
    'semi': ['error', 'always'],
    'vue/attribute-hyphenation':2,
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': 1
    }],
    'max-len': ['error', { 'code': 120, 'tabWidth': 4 }],
    'vue/attributes-order': ['error', {
      'order': [
        'CONDITIONALS',
        'GLOBAL',
        'TWO_WAY_BINDING',
        'DEFINITION',
        'LIST_RENDERING',
        ['UNIQUE', 'SLOT'],
        'CONTENT',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
      ],
      'alphabetical': false
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': false,
      'ignores': []
    }],
    'vue/component-tags-order': ['error', {
      order: [ 'template', 'script', 'style' ]
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
