const list = document.getElementById('categories');
console.log(`Number of categories: ${list.children.length}`);
for (let i = 0; i < list.children.length; i++) {
  console.log(`Category: ${list.children[i].children[0].textContent}`);
  console.log(`Element: ${list.children[i].children[1].children.length}`);
}
