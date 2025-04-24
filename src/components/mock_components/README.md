# Mock Components for Storybook

This folder contains mock implementations of Web Components used for styling and layout previews in Storybook. These mocks are **not** full-featured and are intended **only for development and documentation purposes**.

## Purpose

Some components used in our toujou project (e.g., `toujou-fav-item`) are provided by external extensions and require their own JavaScript to function.
Since we do not bundle those scripts with our theme or Storybook, we use lightweight mock versions of these components to:

- Avoid rendering errors in Storybook
- Style and document our theme’s look and feel
- Maintain visual consistency with the actual components

## Usage

These mock components are registered as custom elements with minimal logic — often just a shadow DOM wrapper and default slot styling.

They are only imported in Storybook, and **never** bundled with the production theme or deployed assets.

## Guidelines

- Only add mocks for components that are externally defined and required for visual rendering.
- Keep mocks lightweight and maintainable.
- Use a dashed border or similar to indicate visually that it’s a placeholder (optional but helpful).

## Example

```js
// .storybook/preview.js
import '../mock_components/mock-toujou-fav-item.js';
