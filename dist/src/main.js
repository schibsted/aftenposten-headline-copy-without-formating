/** @param {ClipboardEvent} event */
function copyPlainText(event) {
  console.log("trigger copy");
  const selection = document.getSelection();
  if (!event.clipboardData || !selection) {
    return;
  }
  console.log("copying", selection.toString());
  event.clipboardData.setData("text/plain", selection.toString());
  event.preventDefault();
}

function main() {
  console.log("running main");
  const feed = document.getElementsByClassName("core-liveblog core-feed")[0];

  console.log("Got feed", feed);

  feed.querySelectorAll("h2").forEach((headline) => {
    headline.addEventListener("copy", copyPlainText);
  });
}

console.log("Loaded...");
main();
