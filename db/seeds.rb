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

BusStop.create({id: 1, bus_route_id: 1, location_description: "Intersection of Bar Beach Rd. and Orchard St.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 2, bus_route_id: 2, location_description: "Intersection of Park Ave. and Orchard St.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 3, bus_route_id: 3, location_description: "123 Soundview Dr.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 4, bus_route_id: 4, location_description: "Intersection of Mackey and Davis", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 5, bus_route_id: 5, location_description: "In front of library", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 6, bus_route_id: 6, location_description: "Intersection of S. Bayles and Main St.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})

BusStop.create({id: 7, bus_route_id: 7, location_description: "Intersection of Shadyside Ave. and Radcliff Ave.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 8, bus_route_id: 8, location_description: "Intersection of Shadyside Ave. and Avenue C", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 9, bus_route_id: 9, location_description: "Intersection of Soundview Dr. and Angler Ln.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 10, bus_route_id: 10, location_description: "Intersection of Ivy Way and Mitchell Rd.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 11, bus_route_id: 11, location_description: "Intersection of Hilltop Ave. and Overlook Dr.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 12, bus_route_id: 12, location_description: "Intersection of Main St. and Monroe St.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})

BusStop.create({id: 13, bus_route_id: 13, location_description: "Intersection of Haraborhills Dr. and Shadyside Ave.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 14, bus_route_id: 14, location_description: "Intersection of Radcliffe Ave. and Poplar Pl.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 15, bus_route_id: 15, location_description: "Intersection of Sandy Ct. and Seagull Ln.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 16, bus_route_id: 16, location_description: "Intersection of Bayview Ave. and N. Plandome Rd.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 17, bus_route_id: 17, location_description: "Intersection of Central Dr. and Ridgeway Rd.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})
BusStop.create({id: 18, bus_route_id: 18, location_description: "Intersection of Main St. and Mackey St.", expected_pick_up_time: "07:50:00", expected_drop_off_time: "15:03:00"})


BusStop.create({id: 19, bus_route_id: 1, location_description: "Intersection of Bar Beach Rd. and Elm St.", expected_pick_up_time: "07:52:00", expected_drop_off_time: "15:05:00"})

BusStop.create({id: 20, bus_route_id: 1, location_description: "Intersection of Bar Beach Rd. and Birch St.", expected_pick_up_time: "07:53:00", expected_drop_off_time: "15:07:00"})

BusStop.create({id: 21, bus_route_id: 1, location_description: "Intersection of Park Ave. and Elm St.", expected_pick_up_time: "07:55:00", expected_drop_off_time: "15:09:00"})

BusStop.create({id: 22, bus_route_id: 1, location_description: "Intersection of Park Ave. and Orchard St.", expected_pick_up_time: "07:57:00", expected_drop_off_time: "15:11:00"})



puts "Done seeding"