# Eventia 

Social network dedicated to promoting social and cultural events in Mexico for free

---

This is a web application developed mainly with [Next.js](https://nextjs.org) and Bootstrap that uses Google as an authentication method.

## Getting Started

You must first clone the repository to your computer or download the files directly in the GitHub graphical interface

Once you have the project locally on your PC, you must have XAMPP installed, activate the Apache and MySQL services and import the database backup stored in this repository

**Note:** in the src/app/api/auth path there is a folder which we must rename to: [...nextauth], we must include the brackets in the name. This modification was made because GitHub does not allow this way of naming folders.

Once the database backup, the services above and the cloned project have been imported, we will enter the following command (as appropriate) to run the project locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authors
* Manuel Rodriguez
* Noel Mora
* Angel Aguayo
