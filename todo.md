# TODO

## Swap form backend to EmailJS

Web3Forms and Formspree both cap at 2 notification emails on free tier. Need 3 officers notified: a8salazar@ucsd.edu, kmatsuoka@ucsd.edu, r8lau@ucsd.edu.

**EmailJS** supports comma-separated `to_email` in templates, 200/month free.

### Setup
1. Create EmailJS account at emailjs.com
2. Connect an email service (Gmail works)
3. Create an email template with `{{message}}`, `{{from_name}}`, `{{from_email}}`
4. Set `to_email` to all 3 officer addresses in the template
5. Grab: service ID, template ID, public key

### Code changes
- `content/config.js`: replace `ORDER.ENDPOINT` / `ACCESS_KEY` with EmailJS service ID, template ID, public key
- `order.js`: swap `fetch()` call from Web3Forms JSON POST to EmailJS `emailjs.send()` (or their REST API)
- `index.html`: add EmailJS SDK script tag (or use their REST endpoint and skip the SDK)
- Remove the `ccemail` field from the payload — EmailJS handles recipients in the template

### Current Web3Forms key to decommission
- `b8ad133e-4a31-4f74-ae61-6514301850d4` (tied to Zaki's account, not an officer's)
