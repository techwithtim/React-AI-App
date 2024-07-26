# Assets Directory

The assets directory is used to store files that will be uploaded to the Squid server along with your code. These files
are secure and can only be accessed by your backend application. You can use the assets directory to store images,
template files, or any other files that your code depends on.

It's important to keep all necessary assets in this directory to ensure that your code runs correctly on the Squid
server. If you need to include large assets, consider using a content delivery network (CDN) or hosting them on a
separate server.

To reference an asset in your backend project, inside a class that extends the `SquidService` base class, you can use:

```typescript
@executable()
async sendEmail(email: string): Promise<void> {
  const templateFile = `${this.assetsDirectory}/email-template.html`
  console.log(`Sending email with the ${templateFile} template...`)
}
```

Thank you for using Squid! Happy coding!
