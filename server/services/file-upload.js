const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

try {
  const config = require("../config/keys");
  aws.config.update({
    secretAccessKey: config.AWS_secretAccessKey,
    accessKeyId: config.AWS_accessKeyId,
    region: "us-east-2"
  });
} catch (ex) {
  aws.config.update({
    secretAccessKey: process.env.AWS_secretAccessKey,
    accessKeyId: process.env.AWS_accessKeyId,
    region: "us-east-2"
  });
}

const s3 = new aws.S3();

// Optional
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
  }
};

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "deep-roots-images",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

module.exports = upload;
