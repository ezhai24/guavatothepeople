## Getting Started
### Reference Links
- [Production site](https://guavatothepeople.vercel.app/)
- [Production CMS](guavatothepeople.herokuapp.com/admin)
- Deploy command - Run this after making production changes in the CMS to update the content on the production site.
  ```
  curl -X POST https://api.vercel.com/v1/integrations/deploy/QmWU6JaTxDrnmjABpR2Rs7zK7ZZwo9ai1MKNboQo6VqXj4/H2tv5VRZNH
  ```

### Making Content Changes
All content changes to the production site can and should be made through the [CMS](guavatothepeople.herokuapp.com/admin). To learn more about the types of sections you can add/remove/modify, view the docs [here](./Sections.md).

### Development
In the `cms` directory...

0. Optionally [create a Cloudinary account](https://cloudinary.com/users/register/free) to enable image uploading in your local Strapi CMS. Take note of the account details at the top of the page.
1. Create a `cms/.env` file. Use the `cms/.env.example` file as a base and fill in the Cloudinary keys as necessary.
2. Install the dependencies, spin up a local database, and start the server
    ```
    yarn
    yarn deps
    yarn develop
    ```

Then in a separate tab, in the `app` directory...
1. Install the dependencies and start the app
    ```
    yarn
    yarn dev
    ```
