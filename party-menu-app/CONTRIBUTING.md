# 🤝 Contributing to Party Menu Application

Thank you for your interest in contributing to the Party Menu Application! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and encourage diverse contributions
- Focus on constructive feedback
- Maintain a professional and friendly environment

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/party-menu-app.git
   cd party-menu-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 💻 Development Workflow

### Project Structure

Follow the existing project structure:
```
src/
├── components/     # Reusable UI components
├── context/        # React Context providers
├── data/           # Static data and utilities
├── pages/          # Page components
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

### Adding New Features

1. **Components**: Create in `src/components/`
   - Each component should have its own .jsx and .css file
   - Use functional components with hooks
   - Keep components focused and reusable

2. **Pages**: Create in `src/pages/`
   - One page per route
   - Include corresponding CSS file
   - Follow existing naming conventions

3. **Styles**: Use plain CSS
   - Component-specific styles in separate .css files
   - Follow BEM naming convention when appropriate
   - Keep styles modular and maintainable

### Testing Your Changes

Before submitting:
```bash
# Build the application
npm run build

# Test the production build
npm run preview

# Check for linting errors
npm run lint
```

## 📝 Coding Standards

### JavaScript/JSX

- Use ES6+ features
- Prefer functional components over class components
- Use React Hooks for state management
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### CSS

- Use kebab-case for class names
- Group related styles together
- Add comments for complex styling
- Ensure responsive design for all screen sizes
- Use CSS variables for repeated values

### Example Component

```jsx
import { useState } from 'react';
import './MyComponent.css';

const MyComponent = ({ title, onAction }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onAction?.();
  };

  return (
    <div className={`my-component ${isActive ? 'active' : ''}`}>
      <h2 className="my-component__title">{title}</h2>
      <button onClick={handleClick} className="my-component__button">
        Toggle
      </button>
    </div>
  );
};

export default MyComponent;
```

## 📦 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(menu): add sorting functionality to menu items
fix(auth): resolve token expiration issue
docs(readme): update installation instructions
style(components): improve button styling consistency
refactor(filters): optimize filter logic for better performance
```

## 🔄 Pull Request Process

1. **Update your branch**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Ensure quality**
   - All features work as expected
   - No console errors or warnings
   - Code follows project standards
   - Build succeeds without errors

3. **Create Pull Request**
   - Use a descriptive title
   - Provide detailed description of changes
   - Reference any related issues
   - Include screenshots for UI changes
   - Add test results if applicable

4. **Pull Request Template**
   ```markdown
   ## Description
   Brief description of the changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   - [ ] Tested locally
   - [ ] Build passes
   - [ ] No console errors

   ## Screenshots (if applicable)
   Add screenshots here

   ## Related Issues
   Closes #issue_number
   ```

5. **Review Process**
   - Address review comments promptly
   - Make requested changes in new commits
   - Be open to feedback and suggestions

## 🐛 Reporting Bugs

When reporting bugs, include:
- Clear bug description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information
- Console errors (if any)

## 💡 Suggesting Features

When suggesting features:
- Provide clear description
- Explain the use case
- Consider implementation approach
- Discuss potential impacts

## 🔍 Code Review Checklist

Reviewers should check:
- [ ] Code follows project standards
- [ ] Changes are well-documented
- [ ] No unnecessary code duplication
- [ ] Proper error handling
- [ ] Responsive design maintained
- [ ] Performance not negatively impacted
- [ ] Accessibility considerations
- [ ] Security best practices followed

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

## ❓ Questions?

If you have questions about contributing:
- Check existing issues and discussions
- Open a new issue with the "question" label
- Reach out to maintainers

---

Thank you for contributing to Party Menu Application! 🎉
