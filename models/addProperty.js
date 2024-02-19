const mongoose = require('mongoose')

const addPropertySchema = new mongoose.Schema({
    // propertname: {
    //     type: String,
    //     require: true
    // },
    usage: {
        type: String,
        require: true
    },
    status:{
        type : String,
        enum : ['Pending' , 'Vacant' , 'Occupied' ,'Contract_Pending','Contract_Occupied_Pending'],
        default : 'Pending'
    },
    propertyType:{
        type : String,
        enum : ['Short-term' , 'Long-term'],
        default : 'Long-term'
    },
    propertytype: {
        type: String,
        require: true
    },
    projectstatus: {
        type: String,
        require: true
    },
    transactiontype: {
        type: String,
        require: true
    },
    communityid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    projectname: {
        type: String,
        require: true
    },
    projectnameid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    buildingid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    buildingname: {
        type: String,
        require: true
    },
    subtypeid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    subtype: {
        type: String,
        require: true
    },
    typelayout: {
        type: String,
        require: true
    },
    tenancystatus: {
        type: String,
        require: true
    },
    floor: {
        type: String,
        require: true
    },
    unitnumber: {
        type: String,
        require: true
    },
    sizearea: {
        type: String,
        require: true
    },
    plotsize: {
        type: String,
        require: true
    },
    builduparea: {
        type: String,
        require: true
    },
    measure_units: {
        type: String,
        require: true
    },
    communityname: {
        type: String,
        require: true
    },
    ownerassociation: {
        type: String,
        require: true
    },
    developerid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    develpoername: {
        type: String,
        require: true
    },
    amenities: [{
        type: String,
        require: true
    }],
    nobathroom: {
        type: String,
        require: true
    },
    halfbathroom: {
        type: String,
        require: true
    },
    propertycountry: {
        type: String,
        require: true
    },
    propertycity: {
        type: String,
        require: true
    },
    furnished: {
        type: String,
        require: true
    },
    kitchen: {
        type: String,
        require: true
    },
    noparking: {
        type: String,
        require: true
    },
    balcony: {
        type: String,
        require: true
    },
    dewapremises: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    youtubelink: {
        type: String,
        require: true
    },
    parkingbay: {
        type: String,
        require: true
    },
    propertyview: {
        type: String,
        require: true
    },
    propertylocation: {
        type: String,
        require: true
    },
    propertyimages: [{
        type: String,
        require: true
    }],
    floorplan: [{
        type: String,
        require: true
    }],
    typicalfloorplan: [{
        type: String,
        require: true
    }],
    buildingelevation: [{
        type: String,
        require: true
    }],
    amenitiesimages: [{
        type: String,
        require: true
    }],
    unitplanattachment: [{
        type: String,
        require: true
    }],
    plotplanattachment: [{
        type: String,
        require: true
    }],
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    customername: {
        type: String,
        require: true
    },
    owner_representative_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    owner_representative_name: {
        type: String,
        require: true
    },
    purchasedate: {
        type: String,
        require: true
    },
    ownernamedeed: {
        type: String,
        require: true
    },
    purchasevaue: {
        type: String,
        require: true
    },
    totalbathroom: {
        type: String,
        require: true
    },
    totalbedroom: {
        type: String,
        require: true
    },
    bedroomensuite: {
        type: Boolean,
        require: true,
        default: false
    },
    bathroomensuite: {
        type: Boolean,
        require: true,
        default: false
    },
    maidroom: {
        type: Boolean,
        require: true,
        default: false
    },
    driverroom: {
        type: Boolean,
        require: true,
        default: false
    },
    storeroom: {
        type: Boolean,
        require: true,
        default: false
    },
    otherroom: {
        type: Boolean,
        require: true,
        default: false
    },
    ensuite: {
        type: Boolean,
        require: true,
        default: false
    },
    streetnumber: {
        type: String,
        require: true
    },
    is_available: {
        type: Boolean,
        require: true,
        default: false
    },
    available_for: {
        type: String,
        require: true
    },
    unlisted: {
        type: Boolean,
        require: true,
        default: false
    },
    owner_changed: {
        type: Boolean,
        require: true,
        default: false
    },
    available_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
    titledeeddocument: {
        type: String,
        require: true,
    },
    OwnerNameAsPerDeed: [{
        ownernameasperdeed: String
    }],
    no_ownernamedeed: {
        type: String,
        require: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        require: true,
        ref: 'employee'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        require: true,
        ref: 'employee'
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("AddProperty", addPropertySchema)