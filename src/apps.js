let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "small"];
let noun = ["jogger", "racoon", "person"];
let ext = [".com", ".org", ".es"];

let domains = [];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of ext) {
        domains.push("${p}${a}${n}${e}");
      }
    }
  }
}

console.log(domains);
