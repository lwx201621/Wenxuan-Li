# Wenxuan-Li

Static academic website. No build step is required for GitHub Pages.

## CV

All CV links open `CV.pdf` in a new tab. Keep the current public PDF at this path; Word source files and previous CV versions are not required for deployment.

## Languages

- All three pages share the header’s **EN / 中文** switch.
- English is the default and remains usable without JavaScript.
- A choice is remembered in browser storage; internal links also carry `?lang=en` or `?lang=zh`, including when previewing local files.
- Explicit language links take priority over a saved choice. For example, `index.html?lang=zh#methods` opens the methods section in Chinese.
- Formal paper titles, author lists, journal names, and research figures stay in their original language.
- English copy lives in the HTML. Chinese translations and accessible labels live in `language.js`; update the corresponding English key when changing a sentence. `language.css` styles the switch and Chinese typography.
