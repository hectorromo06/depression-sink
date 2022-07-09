async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="post-content"]').value;
  const data = document.querySelector('input[name="file"]').value;
  //const data = document.querySelector('input[name="file"]').files[0].name;
  //const data = document.getElementById("input-files").files[0].name;
  // const data = document.getElementById("inputFile");
  // const fReader = new FileReader();
  // fReader.readAsDataURL(input.files[0]);
  // fReader.onloadend = function (event) {
  //   var img = document.getElementById("inputFile");
  //   img.src = event.target.result;
  // };
  // const data = (document.getElementById("input-files").onchange = function () {
  //   document.getElementById("input-files").value = this.value;
  //   document.getElementById("input-files").files[0].fileName;
  // });

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      data,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
