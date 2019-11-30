const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

//const app = express();

aws.config.update({
  secretAccessKey: "8ABY67KEgx5zhJPJZBk+w15MiNkTi1KGq22M4sbo",
  accessKeyId: "AKIAI6LOZPZBXZ3YMYNQ",
  region: "us-east-2"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "deep-roots-images",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
