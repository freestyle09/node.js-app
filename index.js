// Dealing with asynchronus operations
console.log("Before");
getUser(1, user => {
  getRepositories(user.name, repo => {
    console.log(repo);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from database...");
    callback({ id: id, name: "Mosh" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
