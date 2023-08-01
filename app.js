var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < ext.length; e++) {
        console.log(pronoun[i] + adj[j] + noun[n] + ext[e]);
      }
    }
  }
}
