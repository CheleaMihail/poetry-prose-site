# Poetry and Prose Site

This project is a prototype website focused on clean navigation, simple lists, and continuous scrolling for poems and prose.

## Features

### 1. **Clean Navigation**

- A left-side navigation bar with the following sections:
  - Original Poetry
  - Translated Poetry
  - Original Prose
  - Translated Prose
- Each section is easily accessible via links in the navigation bar.

### 2. **Dynamic Content Management**

- Integrated with **DecapCMS** to allow the admin to manage content dynamically without editing the code.

### 3. **Content Organization**

- **Original Poetry:** Displays a list of poems with titles and content separated by a clean horizontal separator.
- **Translated Poetry:** Similar layout as Original Poetry.
- **Original Prose:** Contains three small chapters submitted by the client, managed through DecapCMS.
- **Translated Prose:** Contains one chapter titled "Twenty-One: The Chosen People," with an introductory note above the content.

### 4. **Responsive Design**

- Fully responsive, ensuring optimal viewing on desktops, tablets, and mobile devices.

## File Structure

```
poetry-prose-site/
├── content/             # Site content organized by section
│   ├── original-poetry/ # Original poetry files
│   ├── translated-poetry/ # Translated poetry files
│   ├── original-prose/  # Original prose files
│   └── translated-prose/ # Translated prose files
├── layouts/             # Custom Hugo layouts
├── static/              # Static assets (CSS, JS, images)
│   ├── css/             # CSS files
│   ├── js/              # JavaScript files
│   └── admin/           # DecapCMS configuration
└── config.toml          # Hugo site configuration
```

## Deployment

The site is deployed on platform [Netlify](https://www.netlify.com/).
This is the [link](https://poetry-prose.netlify.app/).
