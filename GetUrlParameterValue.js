let url = `https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/
&utm_medium=webplugin&utm_campaign=poweredby`;

function getUrlParameterValue(url, parameter) {
    return url.substring(url.indexOf(parameter)).split('&')[0].slice(parameter.length+1);

}
let value = getUrlParameterValue(url,'utm_medium');
console.log(value);