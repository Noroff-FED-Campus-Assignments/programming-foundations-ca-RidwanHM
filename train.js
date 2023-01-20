const train = {
    brand: "Porsche",
    seats: 100,
    doors: 20,
    on: false,
    line: ["Line 1", "Line 2", "Line 3", "Line 4"],
    ignition: function () {
        train.on = !train.on;
    },
};