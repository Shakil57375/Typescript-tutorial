# TypeScript Overview.

    - Basically, TypeScript is like an extension or "superset" of JavaScript.

        - Since JavaScript is a loosely typed language,
        - TypeScript enforces the strict use of types.
        - Thus, making it a strictly typed language.
        - Every javascript file is a valid typescript file.

    - Benefits
        - Static typing 
        - Code completion
        - Refactoring
        - Shorthand notations

    - Drawbacks
        - Compilation
        - Discipline in coding


Mind this is a simple setup, consider reading official documentation for project setup
```bash
mkdir typescript-project
cd typescript-project
npm i typescript --save-dev
npx tsc --init
touch index.ts
npx tsc index.ts && node index.js
```

# What is TypeScript?

    - TypeScript is a syntactic superset of JavaScript which adds static typing.
    This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

    note:- TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

    another definition: Typescript is a programming language to addresses the shortcomings of Javascript.

# Why should I use TypeScript?

    - JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

    In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

    TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

    For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

    note:- TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

# How do I use TypeScript?

    - A common way to use TypeScript is to use the official TypeScript compiler, which transpile TypeScript code into JavaScript.

    The next section shows how to get the compiler setup for a local project.

    Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!

# What is TypeScript and why it is used?

    - TypeScript extends JavaScript and improves the developer experience. It enables developers to add type safety to their projects. Moreover, TypeScript provides various other features, like interfaces, type aliases, abstract classes, function overloading, tuple, generics, etc.

# What is TypeScript vs JavaScript?

    - TypeScript is known as an Object-oriented programming language whereas JavaScript is a prototype-based language. TypeScript has a feature known as Static typing but JavaScript does not support this feature. TypeScript supports Interfaces but JavaScript does not.

# what's the benefit of typescript?
    - TypeScript provides better tooling support, such as code static typing, completion, refactoring, Shorthand notations and documentation, thanks to its type annotations and declarations. TypeScript can also make your code more readable and expressive, as you can use advanced features like generics, enums, decorators, and modules.

## Learn More

To learn more about TypeScript, take a look at the following resources:

- [Typescript Org](https://www.typescriptlang.org/) - Visit TypeScript Website.

- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Visit Typescript documentation.
