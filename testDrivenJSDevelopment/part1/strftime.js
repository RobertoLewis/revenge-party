Date.prototype.strftime = (function () {
  function strftime(format) {
    var date = this;

    return (format + "").replace(/%([a-zA-Z])/g,
    function (m, f) {
      var formatter = Date.formats && Date.formats[f];

      if (typeof formatter == "function") {
        return formatter.call(Date.formats, date);
      } else if (typeof formatter == "string") {
        return date.strftime(formatter);
      }

      return f;
    });
  }

  // Internal helper
  function zeroPad(num) {
    return (+num < 10 ? "0" : "") +num;
  }

  Date.formats = {
    // Formatting methods
    d: function (date) {
      return zeroPad(date.getDate());
    },
  }
})
