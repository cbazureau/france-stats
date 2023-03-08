/* eslint-disable @typescript-eslint/no-floating-promises */
import path from "path";
import fs from "fs";
import cheerio from "cheerio";

// Encapsulate top level await in an async function
(async () => {
  try {
    const home = await fetch(
      "https://fr.m.wikipedia.org/wiki/Liste_des_communes_de_la_m%C3%A9tropole_de_Lyon"
    ).then((res) => res.text());
    const communeLinks = cheerio
      .load(home)("table.wikitable")
      .find("tr")
      .map((i, el) =>
        cheerio(el)
          .find("a")
          .attr("href")
          ?.replace("/wiki", "https://fr.m.wikipedia.org/wiki")
      )
      .get() as string[];
    communeLinks.shift();
    console.log(communeLinks);
    const communes = await Promise.all(
      communeLinks.map(async (communeLink) => {
        // Download the content of the page 'https://fr.m.wikipedia.org/wiki/Collonges-au-Mont-d%27Or' and store it in the variable 'html'
        const html = await fetch(communeLink).then((res) => res.text());

        // Find with cheerio the table with the class 'infobox_v2' and find all the 'tr' elements that contains a 'th' element
        const $ = cheerio.load(html);
        const table = $(".infobox_v2");
        const rows = table
          .find("tr")
          .filter((i, el) => $(el).find("th").length > 0);

        // Create a function that returns the value of the 'td' element that is the next sibling of the 'th' element that contains the label
        const getRawValue = (rows: cheerio.Cheerio, label: string): string =>
          rows
            .filter((i, el) => $(el).find("th").text().includes(label))
            .find("td")
            .text();

        const rawHeights = getRawValue(rows, "Altitude");
        // Parse "Min. 165 mMax. 360 m\n" rawHeights to get the min height (165) and the max height (360)
        const heights = rawHeights
          .replace(/Min.|Max.|\s/g, "")
          .split("m")
          .filter((h) => h.length > 0)
          .map((h) => parseInt(h, 10));

        // clean string like 'Collongeards[1]' or '69033\n', to get 'Collongeards' and '69033'
        const cleanString = (str: string): string =>
          str.replace(/\[.+\]|\s/g, "");

        // Create an object with the name of the commune and the population
        const commune = {
          wikipediaLink: communeLink,
          wikipediaPicture: table.find("img").attr("src"),
          name: $(".mw-page-title-main").text(),
          inhabitant: cleanString(getRawValue(rows, "Gentilé")),
          minHeight: heights[0],
          maxHeight: heights[1],
          area: parseFloat(
            getRawValue(rows, "Superficie")
              .replace(/km2|\s/g, "")
              .replace(",", ".")
          ),
          codeInsee: cleanString(getRawValue(rows, "Code commune")),
          zipCode: cleanString(getRawValue(rows, "Code postal")),
        };
        return commune;
      })
    );
    // save the communes array in a csv formatted file 'communes.csv' with the following columns: name, inhabitant, minHeight, maxHeight, area, codeInsee, zipCode, wikipediaLink, wikipediaPicture
    const csv: string = [
      "name;inhabitant;minHeight;maxHeight;area;codeInsee;zipCode;wikipediaLink;wikipediaPicture",
      communes.map(
        (commune) =>
          `${commune.name};${commune.inhabitant};${commune.minHeight || ""};${
            commune.maxHeight || ""
          };${commune.area};${commune.codeInsee};${commune.zipCode};${
            commune.wikipediaLink
          };${commune.wikipediaPicture || ""}`
      ),
    ].join("\n");
    fs.writeFileSync(
      path.resolve(process.cwd(), "./prisma/data/communes.csv"),
      csv
    );
  } catch (error) {
    console.error(error);
  }
})();
