export const config = {
  postgres: {
    username: process.env.RDS_DB_USERNAME,
    password: process.env.RDS_DB_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_DB_HOST,
    dialect: process.env.RDS_DB_DIALECT
  },
  aws: {
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_MEDIA_BUCKET
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
};
