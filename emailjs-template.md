<!-- emailjs-template.md — EmailJS template to paste into the dashboard (todo.md: swap form backend) -->

# EmailJS template — merch order request

Paste-ready template for the EmailJS dashboard (Email Templates → New Template). The variable names match what `order.js` will send as `template_params`: `from_name`, `from_email`, `message`.

## Settings tab

| Field | Value |
|---|---|
| To Email | `a8salazar@ucsd.edu,kmatsuoka@ucsd.edu,r8lau@ucsd.edu` |
| From Name | `Animation Club website` |
| From Email | leave "Use Default Email Address" checked |
| Reply To | `{{from_email}}` |
| Bcc / Cc | leave empty |

Hardcode the three addresses literally — don't use a `{{to_email}}` variable. The public key ships in the page source, so a variable recipient would let anyone use the account to email arbitrary addresses; hardcoded, it can only ever mail the officers.

`Reply To` is the buyer's address, so officers answer an order by just hitting reply.

## Subject

```
Merch order request from {{from_name}}
```

## Content (code editor, HTML)

```html
<div style="max-width:560px;margin:0 auto;padding:24px 16px;font-family:Arial,Helvetica,sans-serif;color:#3B2A52;">
  <h2 style="margin:0 0 4px;font-size:18px;color:#3B2A52;">Merch order request</h2>
  <p style="margin:0 0 16px;font-size:13px;color:#7a6f8f;">Sent from the Animation Club website order form</p>
  <div style="background:#FDF9F0;border:1px solid #e0d5bf;border-radius:8px;padding:16px;">
    <pre style="margin:0;font-family:'Courier New',Courier,monospace;font-size:14px;line-height:1.5;white-space:pre-wrap;word-wrap:break-word;color:#3B2A52;">{{message}}</pre>
  </div>
  <p style="margin:16px 0 0;font-size:13px;color:#7a6f8f;">Reply to this email to reach {{from_name}} at {{from_email}}.</p>
</div>
```

The `<pre>` with `white-space:pre-wrap` preserves the line breaks in the plain-text block `order.js` builds (item lines, total, notes); a bare `{{message}}` in an HTML body would collapse them.

## Contract with order.js

The template consumes exactly three params:

```json
{
  "from_name": "buyer's name",
  "from_email": "buyer's email",
  "message": "the preformatted order block built in __submitOrder"
}
```

Notes for the code swap (tracked in todo.md):

- `order.js` currently sends the buyer address as `email` — rename to `from_email` in the new payload.
- The `ccemail` field and the trailing `For: …` line in `message` become redundant (recipients now live in this template).
- Verified against the EmailJS SDK docs: `template_params` keys must match the `{{…}}` placeholders exactly; unknown params are ignored. Comma-separated To Email is per EmailJS's multiple-recipient support (as researched in todo.md) — confirm once with a test send before decommissioning the Web3Forms key.
