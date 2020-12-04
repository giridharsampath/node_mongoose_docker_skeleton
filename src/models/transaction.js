const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const schema = mongoose.Schema({
  handle: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
    default: uuidv4,
  },
  status: {
    type: String,
  },
  consentStatus: {
    type: String,
  },
  errorCode: {
    type: Number,
  },
  errorMessage: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
  success: {
    type: Boolean,
  },
  reportStatus: {
    type: String,
  },
  requestorUniqueIdentifier: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  s3Token: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

schema.pre("save", function (next) {
  this.updatedAt = new Date();
  return next;
});

module.exports = Transaction = mongoose.model("Transaction", schema);
