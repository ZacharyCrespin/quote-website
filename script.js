fetch("https://random-quote-ta5ihvbchq-uc.a.run.app")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quoteQuote").innerText = `“${data.quote}”`;
    if (data.author != "") {
      document.getElementById("quoteAuthor").innerText = `&mdash;&thinsp;${data.author}`;
      document.title = `“${data.quote}” &mdash;&thinsp;${data.author}`;
    } else {
      document.title = `“${data.quote}”`;
    }
  });

console.log("Use the API: https://api.quotes.zacharyc.site\nMore info on GitHub: https://github.com/ZacharyCrespin/quote-api");
