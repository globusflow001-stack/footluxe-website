# Footluxe Static Website (React + CSS)

A responsive, locally runnable starter redesign with Home, About, Services, Catalog and Contact views. The catalog includes starter entries and image placeholders so the layout works before product images are copied in.

## Run locally
1. Install Node.js (LTS) if it is not already installed.
2. Extract this ZIP.
3. Open the extracted `footluxe-static-website` folder in VS Code.
4. Open Terminal > New Terminal and run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Build check
```bash
npm run build
```

## Add actual PPT images
Copy the original product images into `public/products/`. Then edit `src/products.js` so each `image` path and product name matches the correct company asset. Missing images show a placeholder instead of a broken-image icon.

## Important before publishing
- Confirm every product name, specification and category with the company.
- Replace sample contact details with verified company email/phone/address.
- The contact form is frontend-only and does not send submissions. Connect a backend or form service before using it for real enquiries.
- The design uses an illustrative factory graphic and CSS insole illustration, not a photograph of the actual factory.
- No domain, hosting or deployment changes are included.
