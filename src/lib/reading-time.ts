import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function readingTime() {
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree);
    console.log("processing for ", textOnPage);
    const readingTime = getReadingTime(textOnPage);
    console.log(readingTime);
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
