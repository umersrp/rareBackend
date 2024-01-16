module.exports = {
  apps: [{
    name: "backend",
    script: 'yarn start',
    env: {
      PORT: 8080,
      DATABASE_URI: "mongodb+srv://rare_user:wuWGFQxhhlibVS3j@rare-db.ecj5aq5.mongodb.net/?retryWrites=true&w=majority",
      BASE_URL: "http://dev-rare.srp.ai/",
      OWN_SERVER: "http://dev-rare.srp.ai",
      HOST: "smtp.gmail.com",
      SERVICE: "gmail",
      EMAIL_PORT: 587,
      SECURE: true,
      USER: "staha381@gmail.com",
      PASS: "jsvrgdxfnxxbzzgz",
    }
  }
  ]
};
