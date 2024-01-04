module.exports = {
  apps: [{
    name: "backend",
    script: 'yarn start',
    env: {
      PORT: 8080,
      DATABASE_URI:"mongodb+srv://taha:2VRG2CbfDvxUDzpn@dev-rare-db.jabkunr.mongodb.net/",
      OWN_SERVER:"http://localhost:3600",
      HOST:"srp.ai",
      SERVICE:"gmail",
      EMAIL_PORT:465,
      SECURE:true,
      USER:"rare@srca.com.pk",
      PASS:"1Pakistan23@",
      USER_RARE:"notification@rarehomes.ae",
      ERP_URL:"https://rare-staging.srp.ai/api/resource",
      ERP_TOKEN:"Token 66d237a05bf1789:bf553d9a4de7d8d",
    }
  }
  ]
};
