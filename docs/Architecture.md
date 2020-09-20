## Architecture
### CMS
One of my requirements for building this site was to make sure that the founders of Guava to the People would be able to update their site easily and independently. To that end, I decided to integrate a CMS. For the CMS, I chose to use [Strapi.io](https://strapi.io/documentation/v3.x/getting-started/introduction.html) primarily for its free, open source license and its out-of-the-box admin UI.

The CMS for this website only has one table - `Pages`. The UI for creating/updating the rows in that table looks like so
<img width="883" alt="Strapi Page row" src="./docs/images/pageRow.png">
- The type enumeration determines which page the content will be rendered on
- The [dynamic zone](https://strapi.io/blog/release-beta-18-dynamic-zones) allows admins to choose from a number of prebuilt section components which will structure the content they add to them accordingly. More on section components [here](./docs/Sections.md).

Pages are fetched from a single API endpoint
```
GET /pages?type=
```

And the payload looks something like the following
```
{
  "id": 1,
  "type": "home",
  "created_at": "2020-08-20T20:08:11.641Z",
  "updated_at": "2020-08-20T20:08:11.641Z",
  "content": [
    {
      "__component": "sections.hero-section",
      "id": 1,
      ...
    }
  ]
}
```

### App
As per default Next.js behavior, each page file is associated with a route based on its filename. The page components are in charge of fetching content data from a corresponding CMS route. Data is fetched at build time via the Next.js [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) method. This ensures that the website renders quickly even when the [Heroku CMS dyno is asleep](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping).

Once the content is fetched, the page component will iterate over each section in the `content` property and pass the result to the [`SectionFactory`](./app/components/SectionFactory.tsx) which uses a simple switch/case to render sections accordingly. More on sections [here](./docs/Sections.md).

It's worth noting that there's a lot of duplicate code across the page files. I considered refactoring it in a few different ways but kept running up against the page transition animations I implemented. I have yet to come up with an elegant solution for integrating these animations with less redundancy but hope to eventually.
