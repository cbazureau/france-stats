/* eslint-disable @typescript-eslint/no-floating-promises */
import cheerio from "cheerio";

const FORCE_INFO: { name: string; codeInsee: string; zipCode: string }[] = [];

// Encapsulate top level await in an async function
(async () => {
  try {
    const home = await fetch(
      "https://fr.m.wikipedia.org/wiki/Arrondissements_de_Lyon"
    ).then((res) => res.text());
    const districts = cheerio
      .load(home)("table.wikitable")
      .find("tr")
      .map((i, el) => ({
        wikipediaLink: cheerio(el)
          .find("a")
          .attr("href")
          ?.replace("/wiki", "https://fr.m.wikipedia.org/wiki"),
        zipCode: cheerio(el).find("td").eq(1).text(),
        codeInsee: cheerio(el).find("td").eq(0).text(),
        area: cheerio(el).find("td").eq(5).text(),
      }))
      .get() as {
      wikipediaLink: string;
      zipCode: string;
      codeInsee: string;
      area: string;
    }[];
    districts.shift();
    console.log(districts);

    const finalDistricts = await Promise.all(
      districts.map(async (district) => {
        const html = await fetch(district.wikipediaLink).then((res) =>
          res.text()
        );

        const $ = cheerio.load(html);
        const table = $(".infobox_v2");

        // Create an object with the name of the commune and the population
        const currentName = $("#firstHeading").text();
        return {
          wikipediaLink: district.wikipediaLink,
          wikipediaPicture: table.find("img").attr("src"),
          name: currentName,
          area: parseInt(district.area, 10) / 100,
          codeInsee: parseInt(district.codeInsee, 10),
          zipCode: parseInt(district.codeInsee, 10),
          ...(FORCE_INFO.find(({ name }) => name === currentName) || {}),
        };
      })
    );
    console.log(JSON.stringify(finalDistricts));
  } catch (error) {
    console.error(error);
  }
})();
