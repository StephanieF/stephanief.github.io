---
title: Projects
head:
  - - script
    - { type: "application/ld+json" }
    - |
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": "https://stephanief.github.io/projects#page",
            "url": "https://stephanief.github.io/projects",
            "name": "Projects",
            "description": "Portfolio of software engineering projects showcasing technical skills, problem-solving, and creativity across multiple technologies and domains.",
            "isPartOf": {
              "@id": "https://stephanief.github.io/#website"
            },
            "about": {
              "@id": "https://stephanief.github.io/#person"
            },
            "mainEntity": {
              "@type": "ItemList",
              "@id": "https://stephanief.github.io/projects#projects",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "@id": "https://stephanief.github.io/projects#synthwave-ipsum",
                    "name": "Synthwave Ipsum",
                    "url": "https://loremipsumawesome.com/",
                    "description": "A vibe-coded Lorem Ipsum generator designed to minimize time and cost, with an emphasis on learning and knowledge sharing through writing.",
                    "dateCreated": "2025",
                    "creator": {
                      "@id": "https://stephanief.github.io/#person"
                    },
                    "codeRepository": "https://github.com/StephanieF/synthwave-lorem",
                    "applicationCategory": "Utility",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "SoftwareApplication",
                    "@id": "https://stephanief.github.io/projects#visual-detective",
                    "name": "Visual Detective",
                    "url": "https://chatgpt.com/g/g-DhaGfosbH-visual-detective",
                    "description": "AI image analysis tool that detects and explains manipulations made by AI generation tools, highlighting changes and their locations within images.",
                    "dateCreated": "2025",
                    "creator": {
                      "@id": "https://stephanief.github.io/#person"
                    },
                    "applicationCategory": "ImageAnalysis",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "SoftwareApplication",
                    "@id": "https://stephanief.github.io/projects#personal-site",
                    "name": "Personal Site",
                    "url": "https://stephanief.github.io/",
                    "description": "Personal portfolio and blog site built with VuePress, featuring technical content and project documentation.",
                    "dateCreated": "2024",
                    "creator": {
                      "@id": "https://stephanief.github.io/#person"
                    },
                    "codeRepository": "https://github.com/StephanieF/stephanief.github.io",
                    "applicationCategory": "WebApplication"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "SoftwareApplication",
                    "@id": "https://stephanief.github.io/projects#vscode-php",
                    "name": "VSCode - PHP",
                    "url": "https://github.com/StephanieF/vscode-php",
                    "description": "Docker-based PHP executable solution for Ubuntu users, providing seamless integration with VSCode, Terminus, and other applications without maintaining a full PHP installation.",
                    "dateCreated": "2022",
                    "creator": {
                      "@id": "https://stephanief.github.io/#person"
                    },
                    "codeRepository": "https://github.com/StephanieF/vscode-php",
                    "applicationCategory": "DeveloperApplication",
                    "applicationSubCategory": "Docker"
                  }
                }
              ]
            }
          }
        ]
      }
---

# Projects

Personal projects allow me to practice technical skills, problem-solving abilities, and creativity by experimenting with languages, products, and optimization strategies that I may not use during the execution of my daily work.

From performance optimization to discoverability architecture, these projects showcase both technical implementation and strategic thinking.

Everything is open source; please fork the work or comment back; the best code is collaborative.

## 2026

## 2025

### Synthwave Ipsum

As an experiment in "Vibe Coding" I've created a Lorem Ipsum generator, with a goal of keeping the time and cost as low as possible.

The secondary goal was to start creating medium posts as a way to share knowledge and practice writing skills.

[Lorem Ipsum Awesome](https://loremipsumawesome.com/)  [Repo](https://github.com/StephanieF/synthwave-lorem)  [Medium Post](https://medium.com/@stephaniefuda/from-zero-to-deployed-my-first-vibe-coding-experiment-cbf533c5f609)

### Visual Detective

Images manipulated by AI generation can be hard to spot by simply looking. This tool highlights and explains the changes made by AI tools.

As an experiment in building tools for the ChatGPT ecosphere I've created an image review tool that let's you know if an image has been maniputlated by AI and how/where those changes have been made to the image.
[Visual Detective](https://chatgpt.com/g/g-DhaGfosbH-visual-detective)

## 2024

### Personal Site

Built in VuePress with a smattering of plugins. I've not yet had time to figure out custom theming.
[Personal Site Repo](https://github.com/StephanieF/stephanief.github.io)

## 2022

### VSCode - PHP
As an ubuntu user, getting a PHP executable file set up in a way where my VSCode, Terminus ans other applications could find it, without having to maintain a full php install on my machines was a bit of a hassle.

I've created a docker image, with instructions on how to set up and remove a container and use it as a local executable.
[VSCode - PHP](https://github.com/StephanieF/vscode-php)