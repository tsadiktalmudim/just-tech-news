const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format date() returns a date string", () => {
  const date = new Date("2020-03-20 06:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

test("check that format_plural correctly pluralizes words", () => {
  const words = (Tiger(1), Lion(2));

  expect(format_plural(words)).toBe(["Tiger, Lions"]);
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/abcdefg/");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
