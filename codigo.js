let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `HostName: <b>${hostname}</b><br>`;
html += `PathName: <b>${pathname}</b><br>`;
html += `Url Completa: <b>${href}</b><br>`;

document.write(html);


let alto = window.screen.height;
let ancho = window.screen.width;