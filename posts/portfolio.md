---
title: "Portfolio Website"
image: "/../public/images/portfolio/sweet-logo.png"
width: 350
height: 300
description: "This could be the most meta thing about this portfolio website; a page describing how this site was made. Alternatively, one could say that I have learned a lot of new tricks by doing the Figma designs for this portfolio of mine. I'd like to break down the design process in all of its detail."
---

[Figma Prototype](https://www.figma.com/proto/D5c4d4i07jRKUkqgXXrqPE/Portfolio-Design?page-id=0%3A1&node-id=511%3A2197&viewport=241%2C48%2C1.48&scaling=min-zoom&starting-point-node-id=591%3A3251&show-proto-sidebar=1)

[Figma Design](https://www.figma.com/file/D5c4d4i07jRKUkqgXXrqPE/Portfolio-Design?node-id=0%3A1)

This could be the most meta thing about this portfolio website; a page describing how this site was made. Alternatively, one could say that I have learned a lot of new tricks by doing the Figma designs for this portfolio of mine. I'd like to break down the design process in all of its detail.

Currently, this site is a placeholder layout for the final portfolio design, which are conveyed here in the [Figma Prototype](https://www.figma.com/proto/D5c4d4i07jRKUkqgXXrqPE/Portfolio-Design?page-id=0%3A1&node-id=511%3A2197&viewport=241%2C48%2C1.48&scaling=min-zoom&starting-point-node-id=591%3A3251&show-proto-sidebar=1).

## Layout and Design

When approaching my online portfolio, one of the things I wanted to do was come up with something that had as few clicks as possible to get to the information. If it's one thing that I've taken from all of my studies of Baymard and the entire user experience, less clicks to get to where you want to get to = easier navigation of site = overall better user experience. Certainly there's a lot more to it than that, but ease-of-use of a site is, undoubtedly, one of the most important aspects of a solid user experience.

### Title.

I went with a classic Outrun vibe for my name/portfolio title. The brush stroke is reminiscent of a retro style movie title, and is on the darkest part of the background. A drop-shadow effect has also been added here to outline and embolden the text. You definitely know it's me!

### Social Links.

I have included five of the most popular social sites currently, but will probably change for the final product once I decide which social sites are most relevant to my career goals. For instance, Facebook will probably not be included as it's mostly used for personal things (and not that often anymore). 

### Navigation.

I'm opting for large, easy-to-see navigation buttons front and center, which should translate well from Mobile to Desktop. Cyan is being used here against the darker background so that it stands out and can be easily read. Text-glow and a near-white color is being used for hovering, while simultaneously dimming the rest of the options in desktop mode. The navigation will slide to the left as a frame opens up, showing the selected list of projects for that specific design.

This is the current working list of project categories I want to feature, but will most likely be updated as categories change.   

### Project List View.

#### Mobile:

Once a user selects a navigation item, the button slides to the top, hiding the other menu options, while a back arrow appears to the user. Selecting the back arrow or the header that is now highlighted pink will hide the list view, and return the user to the default navigation view.

The list view is made up of item components, each consisting of a thumbnail of the current project's most iconic image, a title for the project that is now in Cyan, and the first couple sentences of the project's main description, up to 4 rows of text high. The last row will be partially faded if the block of text continues beyond the initial 4 rows allotted. a cyan scroll bar will be visible to the user if the project list goes beyond the y-overflow.

I went with this style because it highlights three of the most defining pieces of the project, including the name, a thumbnail and a few lines of the opening text which will have a quip about the overall idea behind the project.

#### Desktop:

The Project List View expands from the right, appearing as a line that opens up to the respective size of the user's viewport. This also slides the navigation from the right side to the left, setting the select colors (Pink Highlight and Pink Glow) for the category button and dimming the rest of the selected options to Cyan 50% opacity.

Clicking on a pink item will return it to Cyan, using the colors as a visual indicator to the user that pink returns them to the previous view, while Cyan takes them forward. The sizes of the project list items will enlarge, increasing the overall size of the thumbnail, and increasing text size to more easily read on 2k and 4k monitors. I'm sizing text so that it fits relative on the respective screens.

Again, large, selectable text is being used to increase visibility. Each project list item is selectable from the entirety of the div it resides in.

### Project Detail View.

After selecting a project, the list transitions into the Project Detail View. The header is at the top, underneath is a larger picture of the thumbnail, and beneath that, a breakdown of the project. Following UX case study principals, each project write-up is broken up into a story and sections that focuses on the core ideas of the project, problems and obstacles that needed to be solved, and the solutions that got us to the end deliverable. Again, the whole idea is that the Detail View conveys a story and understanding of the project. For me, it was connecting with a time and a nostalgia that I relate to, blending the old retro aesthetic with new designs and layout practices to create something very "Synthwave."

## Final Thoughts

While this breakdown of the Portfolio has not been "exciting," it details the issues and thoughts that I had during the planning and execution of it. I want to bring a clean, simple, elegant design to showcase my content (which heavily revolves around gaming and user interface) in a simple-to-navigate interface. The ultimate goal is to finish the coding in Next.js/Typescript, with transitions that make sense, appeal to the aesthetic, and don't take away from the overall experience by being too flashy or intrusive.

This portfolio is definitely an extension of my current likes and hobbies, as well as appealing to a crowd that enjoys the retro, "synthwave" feel that the fonts and colors are showcasing. If you want to call me out for any poor practices or the fact that I am still new to the professional side of UX design, please let me know! I love constructive criticism so that I can improve myself, appeal to larger groups, and improve the user experience all together for those visiting my site or interacting with my projects.

