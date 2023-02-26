## Getting Started

Install the dependencies and run the development server:

```bash
# Install the dependencies
# yarn has some issues with TipTap editor so npm was used
npm i

# Run in development
npm run dev
```

Next.js app runs locally on [http://localhost:3000](http://localhost:3000)

<br />

## Structure

| Folders            |         Description         |
| :----------------- | :-------------------------: |
| [src](./src)       |    All client side code     |
| [server](./server) | Next API ( Supabase stuff ) |
| [pages](./pages)   |   Next file based routes    |
| [public](./public) |  Public assets mapped to /  |

<br />

## Environments

| Env        | Branch  |                            Domain                            |
| :--------- | :-----: | :----------------------------------------------------------: |
| production | master  |         [docs.fossly.tech](https://docs.fossly.tech)         |
| staging    | staging | [staging-docs.fossly.tech](https://staging-docs.fossly.tech) |

<br />

## Translations

To add a new language support

1. Add translations to **public/locales/\*/translations.json**
2. Add your locale to **next.config.js**
3. Add option to language select **src/modules/Settings/...**

Or just add your translations to the json file and message me for the rest
