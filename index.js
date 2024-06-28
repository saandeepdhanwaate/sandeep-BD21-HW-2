const express = require("express");
const app = express();
const port = 3000;

let gitHubPublicData = {
  username: "sandeep77",
  fullName: "Sandeep Kumar",
  email: "sandeep@gmail.com",
  repository: 77,
  gists: 7,
  joinOn: "Sep 2018",
};

// github-profile

function getProfileUrl(gitHubPublicData) {
  return { profileUrl: "https://github.com/" + gitHubPublicData.username };
}
app.get("/github-profile", (req, res) => {
  let profileUrl = getProfileUrl(gitHubPublicData);
  res.json(profileUrl);
});

// github-public-email
function getPublicEmail(gitHubPublicData) {
  return gitHubPublicData.email;
}
app.get("/github-public-email", (req, res) => {
  let publicEmail = getPublicEmail(gitHubPublicData);

  res.json({ publicEmail: publicEmail });
});

// github-repos-count
function getReposCount(gitHubPublicData) {
  return gitHubPublicData.repository;
}
app.get("/github-repos-count", (req, res) => {
  let repoCount = getReposCount(gitHubPublicData);
  res.json({ repoCount });
});

// github-gists-count
function getGistsCount(gitHubPublicData) {
  return { gitstCount: gitHubPublicData.gists };
}
app.get("/github-gists-count", (req, res) => {
  let gistsCount = getGistsCount(gitHubPublicData);
  res.json(gistsCount);
});

// github-user-bio
function getUserBio(gitHubPublicData) {
  return {
    fullName: gitHubPublicData.fullName,
    joinOn: gitHubPublicData.joinOn,
    email: gitHubPublicData.email,
  };
}
app.get("/github-user-bio", (req, res) => {
  let userBio = getUserBio(gitHubPublicData);
  res.json(userBio);
});


// github-repo-url
function getRepoUrl(gitHubPublicData, repoName){
  return `https://github.com/${gitHubPublicData.username}/${repoName}`;
}
app.get('/github-repo-url',(req, res)=>{
  let repoName = req.query.repoName;
  let repoUrl = getRepoUrl(gitHubPublicData, repoName)
  res.json({repoUrl : repoUrl})
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
