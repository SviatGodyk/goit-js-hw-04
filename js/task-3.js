const profile = {
  name: "Jacob",
  playtime: 300,
  changeUsername(newName) {
    this.name = newName;
  },
  updatePlayTime(hours) {
    this.playtime += hours;
  },
  getInfo() {
    console.log(`${this.name} has ${this.playtime} active hours!`);
  },
};
profile.getInfo();
console.log(profile.changeUsername("Marco"));
// console.log(profile.name);

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
