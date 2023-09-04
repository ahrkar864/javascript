"use strict";
const countries_data = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    region: "Asia",
    area: 652230,
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://flagcdn.com/ax.svg",
    region: "Europe",
    area: 1580,
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2837743,
    flag: "https://flagcdn.com/al.svg",
    region: "Europe",
    area: 28748,
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 43851043,
    flag: "https://flagcdn.com/dz.svg",
    region: "Africa",
    area: 2381741,
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 55197,
    flag: "https://flagcdn.com/as.svg",
    region: "Oceania",
    area: 199,
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 77265,
    flag: "https://flagcdn.com/ad.svg",
    region: "Europe",
    area: 468,
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 32866268,
    flag: "https://flagcdn.com/ao.svg",
    region: "Africa",
    area: 1246700,
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://flagcdn.com/ai.svg",
    region: "Americas",
    area: 91,
  },
  {
    name: "Antarctica",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://flagcdn.com/aq.svg",
    region: "Polar",
    area: 14000000,
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 97928,
    flag: "https://flagcdn.com/ag.svg",
    region: "Americas",
    area: 442,
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish", "Guaraní"],
    population: 45376763,
    flag: "https://flagcdn.com/ar.svg",
    region: "Americas",
    area: 2780400,
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian"],
    population: 2963234,
    flag: "https://flagcdn.com/am.svg",
    region: "Asia",
    area: 29743,
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    languages: ["Dutch", "(Eastern) Punjabi"],
    population: 106766,
    flag: "https://flagcdn.com/aw.svg",
    region: "Americas",
    area: 180,
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 25687041,
    flag: "https://flagcdn.com/au.svg",
    region: "Oceania",
    area: 7692024,
  },
  {
    name: "Austria",
    capital: "Vienna",
    languages: ["German"],
    population: 8917205,
    flag: "https://flagcdn.com/at.svg",
    region: "Europe",
    area: 83871,
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    languages: ["Azerbaijani"],
    population: 10110116,
    flag: "https://flagcdn.com/az.svg",
    region: "Asia",
    area: 86600,
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 393248,
    flag: "https://flagcdn.com/bs.svg",
    region: "Americas",
    area: 13943,
  },
  {
    name: "Bahrain",
    capital: "Manama",
    languages: ["Arabic"],
    population: 1701583,
    flag: "https://flagcdn.com/bh.svg",
    region: "Asia",
    area: 765,
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    languages: ["Bengali"],
    population: 164689383,
    flag: "https://flagcdn.com/bd.svg",
    region: "Asia",
    area: 147570,
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    languages: ["English"],
    population: 287371,
    flag: "https://flagcdn.com/bb.svg",
    region: "Americas",
    area: 430,
  },
  {
    name: "Belarus",
    capital: "Minsk",
    languages: ["Belarusian", "Russian"],
    population: 9398861,
    flag: "https://flagcdn.com/by.svg",
    region: "Europe",
    area: 207600,
  },
  {
    name: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    population: 11555997,
    flag: "https://flagcdn.com/be.svg",
    region: "Europe",
    area: 30528,
  },
  {
    name: "Belize",
    capital: "Belmopan",
    languages: ["English", "Spanish"],
    population: 397621,
    flag: "https://flagcdn.com/bz.svg",
    region: "Americas",
    area: 22966,
  },
  {
    name: "Benin",
    capital: "Porto-Novo",
    languages: ["French"],
    population: 12123198,
    flag: "https://flagcdn.com/bj.svg",
    region: "Africa",
    area: 112622,
  },
  {
    name: "Bermuda",
    capital: "Hamilton",
    languages: ["English"],
    population: 63903,
    flag: "https://flagcdn.com/bm.svg",
    region: "Americas",
    area: 54,
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    languages: ["Dzongkha"],
    population: 771612,
    flag: "https://flagcdn.com/bt.svg",
    region: "Asia",
    area: 38394,
  },
  {
    name: "Bolivia (Plurinational State of)",
    capital: "Sucre",
    languages: ["Spanish", "Aymara", "Quechua"],
    population: 11673029,
    flag: "https://flagcdn.com/bo.svg",
    region: "Americas",
    area: 1098581,
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    capital: "Kralendijk",
    languages: ["Dutch"],
    population: 17408,
    flag: "https://flagcdn.com/bq.svg",
    region: "Americas",
    area: 294,
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    languages: ["Bosnian", "Croatian", "Serbian"],
    population: 3280815,
    flag: "https://flagcdn.com/ba.svg",
    region: "Europe",
    area: 51209,
  },
  {
    name: "Botswana",
    capital: "Gaborone",
    languages: ["English", "Tswana"],
    population: 2351625,
    flag: "https://flagcdn.com/bw.svg",
    region: "Africa",
    area: 582000,
  },
  {
    name: "Bouvet Island",
    languages: ["Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk"],
    population: 0,
    flag: "https://flagcdn.com/bv.svg",
    region: "Antarctic Ocean",
    area: 49,
  },
  {
    name: "Brazil",
    capital: "Brasília",
    languages: ["Portuguese"],
    population: 212559409,
    flag: "https://flagcdn.com/br.svg",
    region: "Americas",
    area: 8515767,
  },
  {
    name: "British Indian Ocean Territory",
    capital: "Diego Garcia",
    languages: ["English"],
    population: 3000,
    flag: "https://flagcdn.com/io.svg",
    region: "Africa",
    area: 60,
  },
  {
    name: "United States Minor Outlying Islands",
    languages: ["English"],
    population: 300,
    flag: "https://flagcdn.com/um.svg",
    region: "Americas",
  },
  {
    name: "Virgin Islands (British)",
    capital: "Road Town",
    languages: ["English"],
    population: 30237,
    flag: "https://flagcdn.com/vg.svg",
    region: "Americas",
    area: 151,
  },
  {
    name: "Virgin Islands (U.S.)",
    capital: "Charlotte Amalie",
    languages: ["English"],
    population: 106290,
    flag: "https://flagcdn.com/vi.svg",
    region: "Americas",
    area: 346.36,
  },
];

// Global Variables
const numFormatter = Intl.NumberFormat("en-US");
const countriesContainer = document.querySelector(".countries-container");
const categoryHeadingContainer = document.querySelector(
  ".category-heading-container"
);
const worldPopulation = countries_data.reduce(
  (acc, cur) => cur.population + acc,
  0
);
let currentState;
let dataGenerated = false;
//
//
//
//
//
//Init func
const init = function () {
  document.querySelector(".country-population").textContent =
    numFormatter.format(worldPopulation);

  document.querySelector(
    "h2"
  ).textContent = `Currently we have ${countries_data.length} Countries`;
};
init();

// Event delegation
categoryHeadingContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target.classList.contains("category-heading");
  if (!target) return;
  fetchData(e.target.dataset.type);
});

const fetchData = function (state = "population") {
  if (dataGenerated && state === currentState) return;
  else {
    dataGenerated = true;
    currentState = state;
    const [first, ...rest] = document.querySelectorAll(".country-container");
    rest.forEach((el) => el.remove(el));
    state === "population" ? loadPopulation() : loadLanguages();
  }
};

const loadPopulation = function () {
  const topCountriesPopulation = countries_data
    .sort((a, b) => b.population - a.population)
    .filter((_, i) => i < 10);
  return loadHTML(topCountriesPopulation);
};

const loadLanguages = function () {
  const languages = [
    ...new Set(countries_data.flatMap((el) => el.languages)),
  ].map((language) => {
    // const object = { language, times: 0 };
    // return object;
    return { language, times: 0 };
  });

  const countLanguages = countries_data.flatMap((el) => el.languages);
  countLanguages.forEach((lang) => {
    const found = languages.find((el) => lang === el.language);
    found.times++;
  });

  const sortedLanguages = languages
    .sort((a, b) => b.times - a.times)
    .filter((_, i) => i < 10);

  return loadHTML(sortedLanguages);
};

const loadHTML = function (arr) {
  document.querySelector(".category-title").textContent =
    currentState === "population"
      ? "10 Most populated countries in the world"
      : "10 Most spoken languages in the world";
  arr.forEach((el) => {
    //Inserting the HTML
    countriesContainer.insertAdjacentHTML(
      "beforeend",
      `        <div class="country-container">
   <p class="country-name">${
     currentState === "population" ? el.name : el.language
   }</p>
      <p class="country-graph"><span class="graph" style="width:${
        currentState === "population"
          ? (el.population / worldPopulation) * 100
          : (el.times / countries_data.flatMap((el) => el.languages).length) *
            100
      }%">&nbsp;</span></p>
          <p class="country-population">${
            currentState === "population"
              ? numFormatter.format(el.population)
              : numFormatter.format(el.times)
          }
          </p>
</div>
`
    );
  });
};