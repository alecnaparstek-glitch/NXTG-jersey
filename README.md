# NXTG Jerseys Website Starter

This ZIP is a front-end starter for NXTG Jerseys (Next Gen Jerseys), based on the requested structure and feature list.

## Included
- NXTG logo in `assets/nxtg-logo.jpeg`
- Responsive homepage
- Shop-all catalog
- League/team navigation
- Search
- Filtering and sorting
- Product detail modal
- Size selection
- Name/number customization fields
- Local cart
- Guest-checkout-ready flow
- Stripe-ready checkout placeholder
- Database/import-ready architecture notes
- Mobile navigation

## Important
The sample catalog in `app.js` contains a small set of demo products so the ZIP stays lightweight. It is intentionally structured so a real database/import can replace that array.

For the production version:
1. Put the authorized product catalog into a database (Supabase/PostgreSQL is suitable).
2. Import products via CSV/JSON rather than hard-coding thousands of products into the UI.
3. Add authorized product images.
4. Connect Stripe using server-side API routes and environment variables.
5. Add real order creation, webhooks, fulfillment status, email confirmations, shipping/tax logic, and secure admin authentication.
6. Only use product data/images that NXTG Jerseys is authorized to use.

## Run locally
Open `index.html` in a browser for the static demo. For a production app, migrate the UI into Next.js/React or another supported full-stack framework and connect the database/payment services.
