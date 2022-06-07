puts "start seeding"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
School.create({id: 1, name: "Guggenheim Elementary School"})
School.create({id: 2, name: "Sousa Elementary School"})
School.create({id: 3, name: "Weber Middle School"})
School.create({id: 4, name: "Schreiber High School"})

Bus.create({id: 1, number: 12})
Bus.create({id: 2, number: 17})
Bus.create({id: 3, number: 24})
Bus.create({id: 4, number: 26})
Bus.create({id: 5, number: 35})
Bus.create({id: 6, number: 43})

BusRoute.create({id: 1, name: "Park Section North", bus_id: 1, school_id: 1})
BusRoute.create({id: 2, name: "Park Section South", bus_id: 2, school_id: 1})
BusRoute.create({id: 3, name: "Soundview", bus_id: 3, school_id: 1})
BusRoute.create({id: 4, name: "Port Washington Estates", bus_id: 4, school_id: 2})
BusRoute.create({id: 5, name: "Baxter Estates", bus_id: 5, school_id: 2})
BusRoute.create({id: 6, name: "Main Street", bus_id: 6, school_id: 2})

BusRoute.create({id: 7, name: "Terrace Section East", bus_id: 1, school_id: 3})
BusRoute.create({id: 8, name: "Terrace Section South", bus_id: 2, school_id: 3})
BusRoute.create({id: 9, name: "Soundview", bus_id: 3, school_id: 3})
BusRoute.create({id: 10, name: "Port Washington Estates", bus_id: 4, school_id: 3})
BusRoute.create({id: 11, name: "Baxter Estates", bus_id: 5, school_id: 3})
BusRoute.create({id: 12, name: "Main Street", bus_id: 6, school_id: 3})

BusRoute.create({id: 13, name: "Terrace Section East", bus_id: 1, school_id: 4})
BusRoute.create({id: 14, name: "Terrace Section South", bus_id: 2, school_id: 4})
BusRoute.create({id: 15, name: "Soundview", bus_id: 3, school_id: 4})
BusRoute.create({id: 16, name: "Port Washington Estates", bus_id: 4, school_id: 4})
BusRoute.create({id: 17, name: "Baxter Estates", bus_id: 5, school_id: 4})
BusRoute.create({id: 18, name: "Main Street", bus_id: 6, school_id: 4})



puts "Done seeding"