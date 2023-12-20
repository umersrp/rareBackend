module.exports = {
  apps: [{
    name: "backend",
    script: 'yarn start',
    env: {
      PORT: 8080,
      DATABASE_URI: "mongodb+srv://taha:1Pakistan23@dev-rare-db.jabkunr.mongodb.net/?retryWrites=true&w=majority",
      BASE_URL: "http://dev.srp.ai/",
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
