# unit-testing-base-guide
Principles and basic concepts of unit testing.

Related presentation material: https://docs.google.com/presentation/d/1yHLEu4tRJ1AKXp_tUAg-N5ZofIkbbcNsTA02Du6dwPA/edit?usp=sharing

# STEPS

## 1 - Vanilla testing

1. Install npm and node.
2. Execute npm init.
3. Update package.json
4. Add index.html, index.js and index.spec.js

## 2 - Framework: Jasmine

1. Initialize jasmine
`$ npx jasmine init`
2. Add examples
`$ npx jasmine examples`
3. Create calculator.spec.js inside spec folder to test calculator.js methods.
4. Import the spec inside index.html
5. Add a _describe_ with one _it_ for each calculator method.
6. Open local server to check tests result.

## 2 - Framework: Ava
