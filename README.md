# Tailwind CSS - Content Configuration Error

This repository demonstrates a common issue encountered when using Tailwind CSS: the framework failing to pick up styles from components due to an improperly configured `content` option within `tailwind.config.js`.

The `bug.js` file showcases a scenario where the `content` array may incorrectly list file paths or omits necessary file extensions, preventing Tailwind from correctly parsing your component files.

The solution, presented in `bugSolution.js`, provides the correct configuration that ensures Tailwind correctly processes the specified files and applies the corresponding styles to your components.

## How to Reproduce the Bug

1.  Clone this repository.
2.  Ensure you have Node.js and npm installed.
3.  Run `npm install` to install dependencies.
4.  Attempt to run your application – you'll observe that the Tailwind CSS classes are not being applied.

## Solution

The correct configuration for `content` is shown in the `bugSolution.js`.  Adjust globs within the `content` array to precisely match the locations of your template files.  Make sure that you include all relevant file extensions (e.g., `.html`, `.js`, `.jsx`, `.ts`, `.tsx`).