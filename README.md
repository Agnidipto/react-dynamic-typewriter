# React Dynamic TypeWriter

A lightweight and customizable React component that creates a typewriter effect for your text content.

[![npm version](https://img.shields.io/npm/v/react-dynamic-typewriter.svg)](https://www.npmjs.com/package/react-dynamic-typewriter)
[![npm downloads](https://img.shields.io/npm/dm/react-dynamic-typewriter.svg)](https://www.npmjs.com/package/react-dynamic-typewriter)

## Installation

```bash
npm install react-dynamic-typewriter
```

or

```bash
yarn add react-dynamic-typewriter
```

## Features

- Smooth typing animation
- Support for multiple text strings
- Customizable typing and deletion speeds
- Support for multiline text
- Blinking cursor effect
- Configurable delays and wait times
- Memoized rendering for optimal performance

## Usage

```jsx
import TypeWriter from 'react-dynamic-typewriter';

// Basic usage
function Example() {
  const content = [
    "Hello World!",
    "This is a typing animation...",
    "Pretty cool, right?"
  ];

  return (
    <TypeWriter
      content={content}
      writeSpeed={100}
      deleteSpeed={50}
      waitTime={2000}
    />
  );
}

// Static content (no deletion)
function StaticExample() {
  const content = [
    "This text will be typed out and remain static."
  ];

  return (
    <TypeWriter
      content={content}
      writeSpeed={100}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string[]` | `[]` | Array of strings to be typed |
| `writeSpeed` | `number` | `1000` | Time in milliseconds between typing each character |
| `deleteSpeed` | `number` | `200` | Time in milliseconds between deleting each character |
| `waitTime` | `number` | `4000` | Time in milliseconds to wait before deleting text |
| `delay` | `number` | `200` | Delay between deletion and start of next text |
| `delayToStart` | `number` | `0` | Initial delay before starting the animation |

## Examples

### Multiple Lines
```jsx
const content = [
  "This is line one\nThis is line two",
  "Multiple lines are supported!"
];

<TypeWriter
  content={content}
  writeSpeed={100}
  deleteSpeed={50}
  waitTime={2000}
/>
```

### Dynamic Content with State
```jsx
function DynamicContent() {
  const [messages, setMessages] = useState(['Initial message']);

  return (
    <TypeWriter
      content={messages}
      writeSpeed={100}
      deleteSpeed={50}
      waitTime={2000}
    />
  );
}
```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.