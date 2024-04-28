const express = require('express');
const router = express.Router();


const event_controller = require("../controllers/eventController");
const profile_controller = require("../controllers/profileController");


/// PROFILE ROUTES ///
// POST request for creating profile
router.post("profile/post", 
profile_controller.profile_create_post
)

// POST request to delete a profile
router.post("profile/delete/:id",
profile_controller.profile_delete_post
)

// GET request to update Profile.
router.get("profile/get/:id/profileupdate", 
profile_controller.profile_update_get
);

// POST request to update Profile.
router.post("profile/put/:id/profileupdate", 
profile_controller.profile_update_post
);

// GET request to get a Profile.
router.get("profile/get/:id/profile",
profile_controller.profile_get
)


// POST request to update and sign out of  a Profile.
router.post("profile/put/:id/signout",
profile_controller.profile_sign_out_post
)

// GET request to sign in to a profile.
router.get("profile/get/:email/:password/signin", 
profile_controller.profile_sign_in_get
)

// POST request to update and sign in to a profile
router.post("profile/put/:id/signin", 
profile_controller.profile_sign_in_post
)

/// EVENT ROUTES ///
// POST request to create a event.
router.post("/event/post", 
event_controller.event_create_post
)

// POST request to delete a event.
router.post("event/delete/:id", 
event_controller.event_delete_post
)

// GET request to get all events
router.get("events/get", 
event_controller.events_get
)

// GET request to get a event.
router.get("event/get/:id/aevent", 
event_controller.event_get
)

// GET request to get a event to update.
router.get("event/get/:id/eventupdate", 
event_controller.event_update_get
)

// POST request to update a event.
router.post("event/put/:id/eventupdate", 
event_controller.event_update_post_post
)

module.exports = router;
