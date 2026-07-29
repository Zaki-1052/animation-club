<!-- emailjs-template.md — the EmailJS template for merch orders (live IDs are in content/config.js) -->

# EmailJS template — merch order request

The dashboard template that `order.js` sends through (Email Templates → the one matching `TEMPLATE_ID` in `content/config.js`). To restyle it, paste the HTML below over the template's Content in the **code editor** and save. The variables are exactly what `order.js` sends as `template_params`: `from_name`, `from_email`, `message`.

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

Storybook-themed to match the site: parchment page in a double gold frame on a sky wash, plum ink, a hard-offset "stacked paper" border on the order card, `─ ✦ ─` rule. Email clients strip webfonts and `box-shadow`, so the theme travels in email-safe form: nested borders make the double gold frame, asymmetric border widths fake the hard offset shadow, and system stacks stand in for the site fonts (Trebuchet ≈ Fredoka, Bradley Hand/Segoe Print ≈ Patrick Hand, Georgia ≈ Cinzel). All styles are inline; layout is a table so Outlook keeps the width.

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EAF1F5;padding:28px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;">
        <tr>
          <td style="background-color:#FDF9F0;border:3px solid #B08A47;border-radius:16px;padding:5px;">
            <div style="border:1px solid #D9C69B;border-radius:11px;padding:26px 24px;">

              <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8F5F20;">Animation Club &middot; UC San Diego</p>
              <h2 style="margin:0 0 4px;font-family:'Trebuchet MS','Segoe UI',Verdana,sans-serif;font-size:23px;line-height:1.2;color:#3B2A52;">Merch order request</h2>
              <p style="margin:0 0 20px;font-family:'Bradley Hand','Segoe Print','Comic Sans MS',cursive;font-size:14px;color:#7D6F96;">Sent from the website order form</p>

              <div style="background-color:#FFFDF7;border:2px solid #3B2A52;border-right-width:4px;border-bottom-width:5px;border-radius:10px;padding:16px 18px;">
                <pre style="margin:0;font-family:'Courier New',Courier,monospace;font-size:14px;line-height:1.55;white-space:pre-wrap;word-wrap:break-word;color:#3B2A52;">{{message}}</pre>
              </div>

              <p style="margin:22px 0 10px;text-align:center;font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:2px;color:#B08A47;">&#9472; &#10022; &#9472;</p>
              <p style="margin:0;text-align:center;font-family:'Bradley Hand','Segoe Print','Comic Sans MS',cursive;font-size:15px;line-height:1.5;color:#5C4E75;">Reply to this email to reach <strong style="color:#3B2A52;">{{from_name}}</strong> at {{from_email}}.</p>

            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

Color notes: parchment `#FDF9F0` / plum `#3B2A52` are the site's committed pair; golds `#B08A47`/`#D9C69B`/`#8F5F20` are solid stand-ins for the site's gold hairlines (Outlook ignores `rgba`); `#EAF1F5` is a light wash of the sky accent. The `<pre>` with `white-space:pre-wrap` preserves the line breaks in the plain-text block `order.js` builds.

## Contract with order.js

`order.js` POSTs JSON to `https://api.emailjs.com/api/v1.0/email/send`:

```json
{
  "user_id": "<PUBLIC_KEY>",
  "service_id": "<SERVICE_ID>",
  "template_id": "<TEMPLATE_ID>",
  "template_params": {
    "from_name": "buyer's name",
    "from_email": "buyer's email",
    "message": "preformatted order block (items, total, notes, From line)"
  }
}
```

EmailJS answers with plain text — `OK` on success — so `order.js` reads `res.text()`, not JSON. Template param keys must match the `{{…}}` placeholders exactly; a mismatched key renders blank in the email rather than erroring.
