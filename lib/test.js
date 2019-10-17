let data = ['foo','bar','baz'];
let html =
`
<html>
<head>
  <title>test</title>
</head>
<body>
  <div>header</div
  ${getContent(data)}
  <div>footer</div>
</body>
<html>
`

function getContent(data) {
  return `<div>\n${getList(data)}\n    </div>`;
}
function getList(data) {
  return `      <ul>\n${getListItems(data)}\n      </ul>`
}
function getListItems(data) {
  return data.map(element => {
    return `          <li>${element}</li>`;
  }).join('\n');
}
console.log(html);