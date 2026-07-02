const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { randomUUID } = require("crypto");
const s3 = require("../config/aws");

const uploadS3 = async (file) => {
  const fileName = `profiles/${randomUUID()}-${file.originalname}`;

let s3retun =  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );
  console.log("s3retun....................",s3retun)

  return `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
};

module.exports = uploadS3