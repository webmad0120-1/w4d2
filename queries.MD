# Queries in MongoDB

* Query using both year, rate and director: `{$and: [{year: 2000}, {rate: 8.3}, {"director": "Darren Aronofsky"}]}`
  
* Query by object id: `{_id: ObjectId('5dca8e5545b84480e22b66a9')}`

* Query by having city and year being 1957: `{$and: [{year: 1957}, {city: {$exists: true}}]}`

* all movies of christopher nolan, of the year 2010 or more
`{$and: [{director: "Christopher Nolan"}, {year: {$gte: 2010}}]}`