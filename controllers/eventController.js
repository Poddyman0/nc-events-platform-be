const Event = require("../models/event");
const asyncHandler = require("express-async-handler");

/// EVENT CONTROLLER ///
// POST request to create a event.
exports.event_create_post = [
    (req, res, next) => {
        if (!Array.isArray(req.body.eventAtendees)) {
        req.body.eventAtendees =
            typeof req.body.eventAtendees === "undefined" ? [] : [req.body.eventAtendees];
        }
        next();
    },
    asyncHandler(async (req, res, next) => {
    const aEvent = new Event({
        eventOrganiser: req.body.eventOrganiser,
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventStartDate: req.body.eventStartDate,
        eventStartTime: req.body.eventStartTime,
        eventEndDate: req.body.eventEndDate,
        eventEndTime: req.body.eventEndTime,
        eventBuildingNumber: req.body.eventBuildingNumber,
        eventStreetName: req.body.eventStreetName,
        eventCity: req.body.eventCity,
        eventCounty: req.body.eventCounty,
        eventCountry: req.body.eventCountry,
        eventPostCode: req.body.eventPostCode,
        eventPricing: req.body.eventPricing,
        eventTicketPrice: req.body.eventTicketPrice,
        eventTicketAmount: req.body.eventTicketAmount,
        eventPicture: req.body.eventPicture,
        eventAtendees: req.body.eventAtendees,
      });
      const consoleLogRes = await aEvent.save();
      console.log("event_create_post:", consoleLogRes, aEvent)

    })
]

// POST request to delete a event.
exports.event_delete_post = asyncHandler(async (req, res, next) => {
    const aEvent = await Event.findById(req.params.id).exec();
    console.log("event_delete_post", aEvent, Event)
})

// GET request to get all events
exports.events_get = asyncHandler(async (req, res, next) => {
    const allEvents = await Event.find({}).exec();
    console.log("event_get:", allEvents)

    res.send(allEvents)
})

// GET request to get a event.
exports.event_get = asyncHandler(async (req, res, next) => {
    const aEvent = await Event.findById(req.params.id).exec();
    if (aEvent === null) {
        const err = new Error("Event not found");
        err.status = 404
        return next(err)
    }
    res.send(aEvent)
    console.log("event_get:", aEvent)
})

// GET request to get a event to update.
exports.event_update_get = asyncHandler(async (req, res, next) => {
    const aEvent = await Event.findById(req.params.id).exec()
    if (aEvent === null) {
        const err = new Error("Event not found");
        err.status = 404
        return next(err)
    }
    res.send(aEvent)
    console.log("event_update_get:", aEvent)
})

// POST request to update a event.
exports.event_update_post_post = [
    (req, res, next) => {
        if (!Array.isArray(req.body.eventAtendees)) {
        req.body.eventAtendees =
            typeof req.body.eventAtendees === "undefined" ? [] : [req.body.eventAtendees];
        }
        next();
    },
    asyncHandler(async (req, res, next) => {
    const aEvent = new Event({
        eventOrganiser: req.body.eventOrganiser,
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventStartDate: req.body.eventStartDate,
        eventStartTime: req.body.eventStartTime,
        eventEndDate: req.body.eventEndDate,
        eventEndTime: req.body.eventEndTime,
        eventBuildingNumber: req.body.eventBuildingNumber,
        eventStreetName: req.body.eventStreetName,
        eventCity: req.body.eventCity,
        eventCounty: req.body.eventCounty,
        eventCountry: req.body.eventCountry,
        eventPostCode: req.body.eventPostCode,
        eventPricing: req.body.eventPricing,
        eventTicketPrice: req.body.eventTicketPrice,
        eventTicketAmount: req.body.eventTicketAmount,
        eventPicture: req.body.eventPicture,
        eventAtendees: req.body.eventAtendees,
        _id: req.params.id, // This is required, or a new ID will be assigned!

      });
      const consoleLogRes = await Event.findByIdAndUpdate(req.params.id, aEvent, {});
      console.log("event_update_post_post:", consoleLogRes, Event)

    })
]