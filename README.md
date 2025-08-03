# Bloggest

A React component library for integrating blog functionality with customizable themes and API support.

## Installation

```bash
npm install bloggest
```

## Quick Start

```jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Bloggest } from "bloggest";

function App() {
  return (
    <BrowserRouter>
      <Bloggest apiKey="your-api-key-here" theme="light" />
    </BrowserRouter>
  );
}

export default App;
```

## Features

- 🎨 **Dual Theme Support**: Light and dark themes out of the box
- 🔑 **API Key Authentication**: Secure access to your blog content
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- ⚡ **Loading States**: Skeleton loaders and spinners for better UX
- 🔧 **Configurable API Endpoint**: Use your own blog API or the default service

## Props

### Bloggest Component

| Prop          | Type                | Default                                | Description                             |
| ------------- | ------------------- | -------------------------------------- | --------------------------------------- |
| `apiKey`      | `string`            | **Required**                           | Your API key for accessing blog content |
| `theme`       | `'light' \| 'dark'` | `'light'`                              | Visual theme for the components         |
| `apiEndpoint` | `string`            | `'https://bloggestapi.sohaibaftab.me'` | Custom API endpoint URL                 |
| `header`      | `ReactNode`         | `undefined`                            | Optional header component               |

## Usage Examples

### Basic Usage with Custom Theme

```jsx
import { Bloggest } from "bloggest";

<Bloggest apiKey="your-api-key" theme="dark" />;
```

### With Custom API Endpoint

```jsx
<Bloggest
  apiKey="your-api-key"
  theme="light"
  apiEndpoint="https://your-custom-blog-api.com"
/>
```

### With Custom Header

```jsx
const CustomHeader = () => (
  <header>
    <h1>My Blog</h1>
  </header>
);

<Bloggest apiKey="your-api-key" theme="light" header={<CustomHeader />} />;
```

## Routes

The component automatically sets up the following routes:

- `/` - Blog list page showing all published blogs
- `/read-this-blog/:id` - Individual blog post page

## API Requirements

Your API endpoint should support the following endpoints:

### Get Published Blogs

```
GET /api/blogs/get-published
Headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
```

**Response Format:**

```json
[
  {
    "_id": "blog-id",
    "title": "Blog Title",
    "meta": "Blog description",
    "banner": "image-url",
    "category": "Category Name",
    "date": "2023-01-01"
  }
]
```

### Get Blog Details

```
GET /api/blogs/blog-details?blog=:id
Headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
```

**Response Format:**

```json
{
  "_id": "blog-id",
  "title": "Blog Title",
  "meta": "Blog description",
  "banner": "image-url",
  "category": "Category Name",
  "date": "2023-01-01",
  "content": "<html>Blog content...</html>"
}
```

## Styling

The components come with built-in CSS that supports both light and dark themes. The styling uses CSS custom properties for easy customization.

### Theme Variables

**Light Theme:**

```css
--bg: #f8f8f8;
--bg2: #ffffff;
--txt: #000000;
--bor: #dbdbdb;
```

**Dark Theme:**

```css
--bg: #0a0a0a;
--bg2: #121212;
--txt: #f8f8f8;
--bor: #1a1a1a;
```

## Dependencies

### Peer Dependencies

- React ^18.3.1
- React DOM ^18.3.1
- React Router DOM ^6.28.0

Make sure these are installed in your project:

```bash
npm install react react-dom react-router-dom
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC License - see LICENSE file for details.

## Author

Sohaib Aftab

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub repository](https://github.com/HattySohaib/bloggestUi/issues).
