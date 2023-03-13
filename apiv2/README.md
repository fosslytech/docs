## Getting Started

Install the dependencies and run the development server:

```bash
# NOTE: For running the API convert functions locally
# you'll need LibreOffice installed, I suggest you use hosted api

# Install the dependencies
bun install

# Run in development
bun run dev
```

Bun API runs locally on [http://localhost:4001](http://localhost:4001)

<br />

## Servers

| Location      | Branch |                     Domain                     |
| :------------ | :----: | :--------------------------------------------: |
| EU, Frankfurt | master | [api.odfcollab.com](https://api.odfcollab.com) |

<br />

## How it Works

Convert API is only used to convert documents to desired formats by using the libreoffice --convert-to API. <br />
Converted documents are stored in /temp directory and wiped with a cron job every 30 minutes

Endpoints:

- **/** -> Hello World!
- **/convert** -> Converts documents ( .od\* -> raw html )
- **/download** -> Downloads a file ( raw html -> .od\* )

<br />
<hr />
<br />

## EU Server uses Arch, btw.

<img height="" src="../.github/assets/api_eu.png"/>
