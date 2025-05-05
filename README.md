# Zenith Tek - Embedded Systems & IoT Solutions

## Overview

Zenith Tek is a technology-driven company specializing in embedded systems, IoT solutions, industrial automation, and electronic product development. We provide end-to-end hardware and software solutions, from concept to deployment, catering to a wide range of industries.

This web application serves as the online presence for Zenith Tek, showcasing our services, expertise, and contact information.

## Features

-   **Modern Design:** A beautiful and fully-featured website design.
-   **Responsive Layout:** Optimized for viewing on various devices, from desktops to mobile phones.
-   **Interactive Elements:** Engaging animations and transitions to enhance user experience.
-   **Informative Sections:**
    -   **Hero:** Introduces Zenith Tek with a dynamic background and key information.
    -   **Company Overview:** Provides an overview of the company's mission and values.
    -   **Core Capabilities:** Highlights the main areas of expertise.
    -   **Expertise Section:** Showcases our expertise in microcontrollers.
    -   **Services Section:** Details the services offered by Zenith Tek.
    -   **Why Choose Us:** Explains the reasons to choose Zenith Tek.
    -   **Contact Section:** Allows visitors to get in touch with us.
-   **Contact Form:** A functional contact form for inquiries.
-   **Social Media Links:** Links to Zenith Tek's social media profiles.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A build tool that provides a fast and efficient development experience.
-   **Tailwind CSS:** A utility-first CSS framework for styling the application.
-   **Lucide React:** A library of beautiful icons.
-   **react-tsparticles:** A React component for creating particle effects.
-   **react-hot-toast:** For displaying toast notifications.
-   **Formspree:** For handling form submissions.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 16 or higher)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:

    ```sh
    git clone [repository_url]
    cd [project_directory]
    ```
2.  Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Development

1.  Start the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

    This will start the Vite development server. Open your browser and navigate to the address provided (usually `http://localhost:5173`).

### Building for Production

1.  Build the application:

    ```sh
    npm run build
    # or
    yarn build
    ```

    This will create an optimized build of the application in the `dist` directory.

### Previewing the Production Build

1.  Preview the build locally:

    ```sh
    npm run preview
    # or
    yarn preview
    ```

    This will start a local server to preview the production build.

## Directory Structure

.
├── .bolt              # Bolt configuration files
├── src               # Source code
│   ├── components    # React components
│   │   ├── layout    # Layout components (Header, Footer)
│   │   ├── sections  # Website sections
│   │   └── ui        # UI components (Logo, Cards)
│   ├── data          # Data files
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Entry point for React
│   ├── index.css     # Global styles
│   └── vite-env.d.ts # TypeScript environment declarations
├── index.html        # HTML entry point
├── vite.config.ts    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
├── README.md         # Project documentation
└── .gitignore        # Specifies intentionally untracked files that Git should ignore

## Customization

-   **Tailwind CSS:** Modify the `tailwind.config.js` file to customize the theme, colors, and other styles.
-   **Components:** Edit the React components in the `src/components` directory to change the structure and content of the website.
-   **Data:** Update the data files in the `src/data` directory to modify the content of the sections.

## Deployment

This project can be deployed to various platforms, including:

-   **Netlify:** Simply connect your GitHub repository to Netlify and it will automatically build and deploy your application.
-   **Vercel:** Similar to Netlify, Vercel provides an easy way to deploy web applications.
-   **GitHub Pages:** You can also deploy the application to GitHub Pages by configuring the build process and setting up a deployment workflow.

## Troubleshooting

If you encounter any issues while running or building the application, try the following:

-   Ensure that you have the correct versions of Node.js and npm/Yarn installed.
-   Check the console for any error messages and try to resolve them.
-   Clear the npm/Yarn cache and try installing the dependencies again.
-   If you're still having trouble, please open an issue on the GitHub repository.
