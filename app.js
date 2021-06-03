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
    app.log("Pull request edited");
    app.log(context.octokit.pulls.get({
      owner: "imodeljs",
      repo: "imodeljs"
    }));
    return context.octokit.issues.createComment(
      context.issue({ body: "Pull request edited" })
    );
  });

  app.on("push", async (context) => {
    app.log("Some change is pushed");
    app.log(context);
    app.log(context.octokit.pulls.listReviews({
      owner: "imodeljs",
      repo: "imodeljs",
      pull_number: 1548
    }));
    return context.octokit.issues.createComment(
      context.issue({ body: "Some change is pushed" })
    );
  });
};