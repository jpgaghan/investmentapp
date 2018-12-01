const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
      year: 1914,
      annualpercentagerate: 1.3
  },
  {
      year: 1915,
      annualpercentagerate: 0.9
  },
  {
      year: 1916,
      annualpercentagerate: 7.7
  },
  {
      year: 1917,
      annualpercentagerate: 17.8
  },
  {
      year: 1918,
      annualpercentagerate: 17.3
  },
  {
      year: 1919,
      annualpercentagerate: 15.2
  },
  {
      year: 1920,
      annualpercentagerate: 15.6
  },
  {
      year: 1921,
      annualpercentagerate: -10.9
  },
  {
      year: 1922,
      annualpercentagerate: -6.2
  },
  {
      year: 1923,
      annualpercentagerate: 1.8
  },
  {
      year: 1924,
      annualpercentagerate: .4
  },
  {
      year: 1925,
      annualpercentagerate: 2.4
  },
  {
      year: 1926,
      annualpercentagerate: .9
  },
  {
      year: 1927,
      annualpercentagerate: -1.9
  },
  {
      year: 1928,
      annualpercentagerate: -1.2
  },
  {
      year: 1929,
      annualpercentagerate: 0
  },
  {
      year: 1930,
      annualpercentagerate: -2.7
  },
  {
      year: 1931,
      annualpercentagerate: -8.9
  },
  {
      year: 1932,
      annualpercentagerate: -10.3
  },
  {
      year: 1933,
      annualpercentagerate: -5.2
  },
  {
      year: 1934,
      annualpercentagerate: 3.5
  },
  {
      year: 1935,
      annualpercentagerate: 2.6
  },
  {
      year: 1936,
      annualpercentagerate: 1
  },
  {
      year: 1937,
      annualpercentagerate: 3.7
  },
  {
      year: 1938,
      annualpercentagerate: -2
  },
  {
      year: 1939,
      annualpercentagerate: -1.3
  },
  {
      year: 1940,
      annualpercentagerate: .7
  },
  {
      year: 1941,
      annualpercentagerate: 5.1
  },
  {
      year: 1942,
      annualpercentagerate: 10.9
  },
  {
      year: 1943,
      annualpercentagerate: 6
  },
  {
      year: 1944,
      annualpercentagerate: 1.6
  },
  {
      year: 1945,
      annualpercentagerate: 2.3
  },
  {
      year: 1946,
      annualpercentagerate: 8.5
  },
  {
      year: 1947,
      annualpercentagerate: 14.4
  },
  {
      year: 1948,
      annualpercentagerate: 7.7
  },
  {
      year: 1949,
      annualpercentagerate: -1
  },
  {
      year: 1950,
      annualpercentagerate: 1.1
  },
  {
      year: 1951,
      annualpercentagerate: 7.9
  },
  {
      year: 1952,
      annualpercentagerate: 2.3
  },
  {
      year: 1953,
      annualpercentagerate: .8
  },
  {
      year: 1954,
      annualpercentagerate: .3
  },
  {
      year: 1955,
      annualpercentagerate: -.3
  },
  {
      year: 1956,
      annualpercentagerate: 1.5
  },
  {
      year: 1957,
      annualpercentagerate: 3.3
  },
  {
      year: 1958,
      annualpercentagerate: 2.7
  },
  {
      year: 1959,
      annualpercentagerate: 1.08
  },
  {
      year: 1960,
      annualpercentagerate: 1.5
  },
  {
      year: 1961,
      annualpercentagerate: 1.1
  },
  {
      year: 1962,
      annualpercentagerate: 1.2
  },
  {
      year: 1963,
      annualpercentagerate: 1.2
  },
  {
      year: 1964,
      annualpercentagerate: 1.3
  },
  {
      year: 1965,
      annualpercentagerate: 1.6
  },
  {
      year: 1966,
      annualpercentagerate: 3.0
  },
  {
      year: 1967,
      annualpercentagerate: 2.8
  },
  {
      year: 1968,
      annualpercentagerate: 4.3
  },
  {
      year: 1969,
      annualpercentagerate: 5.5
  },
  {
      year: 1970,
      annualpercentagerate: 5.8
  },
  {
      year: 1971,
      annualpercentagerate: 4.3
  },
  {
      year: 1972,
      annualpercentagerate: 3.3
  },
  {
      year: 1973,
      annualpercentagerate: 6.2
  },
  {
      year: 1974,
      annualpercentagerate: 11.1
  },
  {
      year: 1975,
      annualpercentagerate: 9.1
  },
  {
      year: 1976,
      annualpercentagerate: 5.7
  },
  {
      year: 1977,
      annualpercentagerate: 6.5
  },
  {
      year: 1978,
      annualpercentagerate: 7.6
  },
  {
      year: 1979,
      annualpercentagerate: 11.3
  },
  {
      year: 1980,
      annualpercentagerate: 13.5
  },
  {
      year: 1981,
      annualpercentagerate: 10.3
  },
  {
      year: 1982,
      annualpercentagerate: 6.1
  },
  {
      year: 1983,
      annualpercentagerate: 3.2
  },
  {
      year: 1984,
      annualpercentagerate: 4.3
  },
  {
      year: 1985,
      annualpercentagerate: 3.5
  },
  {
      year: 1986,
      annualpercentagerate: 1.9
  },
  {
      year: 1987,
      annualpercentagerate: 3.7
  },
  {
      year: 1988,
      annualpercentagerate: 4.1
  },
  {
      year: 1989,
      annualpercentagerate: 4.8
  },
  {
      year: 1990,
      annualpercentagerate: 5.4
  },
  {
      year: 1991,
      annualpercentagerate: 4.2
  },
  {
      year: 1992,
      annualpercentagerate: 3
  },
  {
      year: 1993,
      annualpercentagerate: 2.6
  },
  {
      year: 1994,
      annualpercentagerate: 2.6
  },
  {
      year: 1995,
      annualpercentagerate: 2.8
  },
  {
      year: 1996,
      annualpercentagerate: 1.9
  },
  {
      year: 1997,
      annualpercentagerate: 2.3
  },
  {
      year: 1998,
      annualpercentagerate: 1.6
  },
  {
      year: 1999,
      annualpercentagerate: 2.2
  },
  {
      year: 2000,
      annualpercentagerate: 3.4
  },
  {
      year: 2001,
      annualpercentagerate: 2.8
  },
  {
      year: 2002,
      annualpercentagerate: 1.6
  },
  {
      year: 2003,
      annualpercentagerate: 2.3
  },
  {
      year: 2004,
      annualpercentagerate: 2.7
  },
  {
      year: 2005,
      annualpercentagerate: 3.4
  },
  {
      year: 2006,
      annualpercentagerate: 3.2
  },
  {
      year: 2007,
      annualpercentagerate: 2.9
  },
  {
      year: 2008,
      annualpercentagerate: 3.8
  },
  {
      year: 2009,
      annualpercentagerate: -.4
  },
  {
      year: 2010,
      annualpercentagerate: 1.6
  },
  {
      year: 2011,
      annualpercentagerate: 3.2
  },
  {
      year: 2012,
      annualpercentagerate: 2.1
  },
  {
      year: 2013,
      annualpercentagerate: 1.5
  },
  {
      year: 2014,
      annualpercentagerate: 1.6
  },
  {
      year: 2015,
      annualpercentagerate: .1
  },
  {
      year: 2016,
      annualpercentagerate: 1.3
  },
  {
      year: 2017,
      annualpercentagerate: 2.1
  },
  {
      year: 2018,
      annualpercentagerate: 2.2    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
