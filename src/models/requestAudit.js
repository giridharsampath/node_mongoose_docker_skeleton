const mongoose = require("mongoose");

const schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
  },
  request: {
    type: Object,
  },
  response: {
    type: Object,
  },
  apiCode: {
    type: String,
  },
});

schema.pre("save", function (next) {
  this.updatedAt = Date.now();
  return next;
});

module.exports = RequestAudit = mongoose.model("RequestAudit", schema);
