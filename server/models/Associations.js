var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var AssociationSchema = new Schema({
  name: {type: String, default: "Unnamed", required: true},
  link: {type: String, default: ""}
});

AssociationSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

var Association = mongoose.model('Associations', AssociationSchema);

module.exports = Association;