This is a [Next.js 13.x](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run The App Locally

First, run the development server:

```bash
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**you can change the port number if needed using `-p [port numb]` switch.**

```bash
$ yarn dev -p 3001
```

## Run Using Docker

There is a dockerfile in the root directory of the project. You can build & run the app by creating a docker image, then starting a container using the created image:

```bash
# first `cd` to the root directory
$ docker build -t [image_name]:[image_tag] .

$ docker run --publish 3000:3000 [image_name]:[image_tag]
```

## Deployed on Liara

Check out the deployed version on [Liara](https://liara.ir/) for a more realistic analysis on the link below:

[https://countries.iran.liara.run](https://countries.iran.liara.run/)

**Because of the hydration problem, you may get `connection closed` error. Try refreshing the page may solve the problem.**

## Features & Functionality

-   This app uses `eslint` & `prettier` as well as `TypeScript` to validate & format the code. A `husky` pre-commit hook is also configured alongside with `lint-staged` in order to automate the validation process before each commit to the git.

-   In the main page, all countries are listed & you can filter them by region as well as searching for a specific country. Searching is done using `context API` for `state-management`. The filter functionality is a two-way binded flow i.e. you can filter content using the dropdown in the main page, and writing the url manually like `https://baseURL/?filter=Asia` at the same time.

-   The app operates in both `dark mode` & `light mode`, and the ratio of images are fixed in `4:3`. All Images are also lazy loaded using the new `next/image` capabilities.

-   Data fetching is done using `axios` & `react-query` alongside with the new `server-side components` of Next.js 13, but there is a compatiblity problem with `hydration` in Next.js 13 as it is implemented in this project using `react-query` for the main page heavy load of data.

-   By clicking on each country item in the main page, the url will change to `baseURL/[country_name]`, and the detail page can be visited.
