/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });

  app.on("pull_request.edited", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Pull request edited" })
    );
  });
};
