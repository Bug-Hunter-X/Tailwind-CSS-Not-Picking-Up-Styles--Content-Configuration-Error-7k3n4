```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // <-- This line might be incorrect
  theme: {
    extend: {
      // ... your custom theme ...
    },
  },
  plugins: [],
};
```