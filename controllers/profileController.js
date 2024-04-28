const Profile = require("../models/profile");
const asyncHandler = require("express-async-handler");

//TO DO:
// - signIn (inc errors)


/// PROFILE CONTROLLERS ///
// POST request for creating a profile
exports.profile_create_post = asyncHandler(async (req, res, next) => {
    const aProfile = new Profile({
        //change below
        profilePassword: req.body.profilePassword,
        profileTelephone: req.body.profileTelephone,
        profileEmail: req.body.profileEmail,
        profileFirstName: req.body.profileFirstName,
        profileSecondName: req.body.profileSecondName,
        profileDOB: req.body.profileDOB,
        profileRole: req.body.profileRole,
        profileCardHolderName: req.body.profileCardHolderName,
        profileBankName: req.body.profileBankName,
        profileCardNumber: req.body.profileCardNumber,
        profileExpireyDate: req.body.profileExpireyDate,
        profileCVV: req.body.profileCVV,
        profilePostCode: req.body.profilePostCode,
        profileHouseNumber: req.body.profileHouseNumber,
        profileStreet: req.body.profileStreet,
        profileCity: req.body.profileCity,
        profileCounty: req.body.profileCounty, 
        profileSignedIn: req.body.profileSignedIn,
      });
      const consoleLogRes = await aProfile.save();
      console.log("profile_create_post:", consoleLogRes, aProfile)
})

// POST request to delete a profile
exports.profile_delete_post = asyncHandler(async (req, res, next) => {
    const aProfile = await Profile.findById(req.params.id).exec();
    console.log("profile_delete_post", aProfile, Profile)
})

// GET request to update Profile.
exports.profile_update_get = asyncHandler(async (req, res, next) => {
    const aProfile = await Profile.findById(req.params.id).exec()
    if (aProfile === null) {
        const err = new Error("Profile not found");
        err.status = 404
        return next(err)
    }
    res.send(aProfile)
    console.log("profile_update_get:", aProfile)
})


// POST request to update Profile.
exports.profile_update_post = asyncHandler(async (req, res, next) => {
    const aProfile = new Profile({
        profilePassword: req.body.profilePassword,
        profileTelephone: req.body.profileTelephone,
        profileEmail: req.body.profileEmail,
        profileFirstName: req.body.profileFirstName,
        profileSecondName: req.body.profileSecondName,
        profileDOB: req.body.profileDOB,
        profileRole: req.body.profileRole,
        profileCardHolderName: req.body.profileCardHolderName,
        profileBankName: req.body.profileBankName,
        profileCardNumber: req.body.profileCardNumber,
        profileExpireyDate: req.body.profileExpireyDate,
        profileCVV: req.body.profileCVV,
        profilePostCode: req.body.profilePostCode,
        profileHouseNumber: req.body.profileHouseNumber,
        profileStreet: req.body.profileStreet,
        profileCity: req.body.profileCity,
        profileCounty: req.body.profileCounty, 
        profileSignedIn: req.body.profileSignedIn,
        _id: req.params.id, // This is required, or a new ID will be assigned!
    });
    const consoleLogRes = await Profile.findByIdAndUpdate(req.params.id, aProfile, {});
    console.log("profile_update_post:", consoleLogRes, Profile)

})

// GET request to get a Profile.
exports.profile_get = asyncHandler(async (req, res, next) => {
    const aProfile = await Profile.findById(req.params.id).exec();
    if (aProfile === null) {
        const err = new Error("Profile not found");
        err.status = 404
        return next(err)
    }
    res.send(aProfile)
    console.log("event_get:", aProfile)
})

// POST request to update and sign out of  a Profile.
exports.profile_sign_out_post = asyncHandler(async (req, res, next) => {
    const aProfile = new Profile({
        profilePassword: req.body.profilePassword,
        profileTelephone: req.body.profileTelephone,
        profileEmail: req.body.profileEmail,
        profileFirstName: req.body.profileFirstName,
        profileSecondName: req.body.profileSecondName,
        profileDOB: req.body.profileDOB,
        profileRole: req.body.profileRole,
        profileCardHolderName: req.body.profileCardHolderName,
        profileBankName: req.body.profileBankName,
        profileCardNumber: req.body.profileCardNumber,
        profileExpireyDate: req.body.profileExpireyDate,
        profileCVV: req.body.profileCVV,
        profilePostCode: req.body.profilePostCode,
        profileHouseNumber: req.body.profileHouseNumber,
        profileStreet: req.body.profileStreet,
        profileCity: req.body.profileCity,
        profileCounty: req.body.profileCounty, 
        profileSignedIn: false,
        _id: req.params.id, // This is required, or a new ID will be assigned!
    });
    const consoleLogRes = await Profile.findByIdAndUpdate(req.params.id, aProfile, {});
    console.log("profile_sign_out_post:", consoleLogRes, Profile)

})

// GET request to sign in to a profile.

exports.profile_sign_in_get = asyncHandler(async (req, res, next) => {
    let aProfile;
    const profileEmail = await Profile.find({profileEmail: req.params.email}).exec();
    if (profileEmail === null) {
        const err = new Error("Email does not exist.");
        err.status = 404
        return next(err)
    }
    res.send(aProfile)
    const profilePassword = await Profile.find({profilePassword: req.params.password}).exec();
    if (profilePassword === null) {
        const err = new Error("Password does not exist.");
        err.status = 404
        return next(err)
    }
    const profileEmailPassword = await Profile.find({profileEmail: req.params.email, profilePassword: req.params.password}).exec();
    if (profileEmailPassword === null) {
        const err = new Error("Email does not match password.");
        err.status = 404
        return next(err)
    }
    if (profileEmail === null && profilePassword !== null && profileEmailPassword !== null) {
        aProfile = profileEmail
    } else if (profileEmail !== null && profilePassword === null && profileEmailPassword !== null) {
        aProfile = profilePassword
    } else if (profileEmail !== null && profilePassword !== null && profileEmailPassword === null) {
        aProfile = profileEmailPassword
    }else if (profileEmail !== null && profilePassword !== null && profileEmailPassword !== null) {
        aProfile = await Profile.find({profileEmail: req.params.email}).exec()
    }
    res.send(aProfile)
    console.log("profile_sign_in_get:", aProfile)
})

// POST request to update and sign in to a profile
exports.profile_sign_in_post = asyncHandler(async (req, res, next) => {
    const aProfile = new Profile({
        profilePassword: req.body.profilePassword,
        profileTelephone: req.body.profileTelephone,
        profileEmail: req.body.profileEmail,
        profileFirstName: req.body.profileFirstName,
        profileSecondName: req.body.profileSecondName,
        profileDOB: req.body.profileDOB,
        profileRole: req.body.profileRole,
        profileCardHolderName: req.body.profileCardHolderName,
        profileBankName: req.body.profileBankName,
        profileCardNumber: req.body.profileCardNumber,
        profileExpireyDate: req.body.profileExpireyDate,
        profileCVV: req.body.profileCVV,
        profilePostCode: req.body.profilePostCode,
        profileHouseNumber: req.body.profileHouseNumber,
        profileStreet: req.body.profileStreet,
        profileCity: req.body.profileCity,
        profileCounty: req.body.profileCounty, 
        profileSignedIn: true,
        _id: req.params.id, // This is required, or a new ID will be assigned!
    });
    const consoleLogRes = await Profile.findByIdAndUpdate(req.params.id, aProfile, {});
    console.log("profile_sign_in_post:", consoleLogRes, Profile)

})

