const config = {
  resourceServerUrl: "https://api.moneyhub.co.uk/v3",
  identityServiceUrl: "https://identity.moneyhub.co.uk",
  accountConnectUrl: "https://bank-chooser.moneyhub.co.uk/account-connect.js",
  client: {
    client_id: "d02ec65d-2df1-49d4-bee9-17f03b3e1728",
    client_secret: "********",
    token_endpoint_auth_method: "private_key_jwt",
    id_token_signed_response_alg: "RS256",
    request_object_signing_alg: "RS256",
    redirect_uri: "https://your-redirect-uri",
    response_type: "code",
    keys: [
      {
        kty: "RSA",
        n: "t9kL2E8QaPamSFHKL16TNGHo3i3XX9upXgPjD7Eu0_XzetKlkG6iAOgPnCp0Wj9EziW-Q4E3DNtw3VcoL0ZZ3IDljiCyZjsK07WJcGQJW-Spqy3txIN7cijT3JprkP_5FAeTW8s4UdZrFR3ShH15V5_V0s6kv1U1maiqViO8cdnql9PBM2XEWVWXGI2T2H_cxsv1XQ5kW3p7cJ39GOeEt4ADGIFLUiI6I7cMp2nl_h9stAd_BF2Q-iuG47CRbRcE2Oesi4eHrSbRZKIiUxxNWQkqVDIYtBwb-C0KZHarUvxvb0P7ChwMPuZESXvAMmwpQ4jShCzkm3QqmXKjwWr4CQ",
        e: "AQAB",
        d: "PvmhHhJPK7U5VlJ18G3z_KCBNQH84YAL7wFj2O83fDGmmm7neab75VWYa0T7oCJF_ltdZiAv7D6K1bbSNAdkJq0cdOfsVCprVgO8NXx-3DRijhlodcUYFw23LLzUldGoz1yc9HeTLi1FdvFFOE8GrqY4h0JzmnqkpqLo3iLVnSWUk1QhAcJz6cOQ719YjuoYeamqiTgBqvB4rpKh7MDFQCntxHtfIBseUoIPNtRWkpFK5zPBP0eLjcGoP-ati-qWVU2ZtlbT2JRdpIyIzGmkzpz4HPtoDiMADdAJOWWnDJyZmcQWEwmRX7x9Yn5gSmg9SsilxTUxfs3uHV1S3P9DxQ",
        p: "3lgkYDYkiRibakry3oAkCVMwqVMTUW-Wxvh4PkyuAWIRMLY6bR6MxVmlrKByQtnj4bxqws3CUOlkSPE2RxI-GWaPvqdFovWyZ4nkGdb6surQns3sSSJPyjHqq65NZR7xotIsPHt81YpTBn7qwEtU5L30lTUNRxFi1slW1zep1PM",
        q: "060pyv-n3imeN30xtF90qJxlUkcwcbWBBbVQGqZJzB-ybFzEbSbjiC4ELEGKnTCeU7vcdBuX98kyAK43ZzAX968aTcv7_LGdGV5fUnMMht7SpTS-BBmOwq8THOhfb7WgJm-Sszhy5P6zRdS9vQ6fCACi4wc5W1R0UrzU2rthrhM",
        dp: "XUOXrovHc4JQ3pslmNMjSo4MoVnphoVKN5fNyEQd0RKzpz0o8NCZt8ZMykZa51PCVNPV7HSmh43-tOIJJHKwfbMZpJ1BhoONHAUpGvWkHxyD-bji3iJ4WZXqm6z3Ze0-6k9CovQhfukQvm7KRXLT30cWquef9CmEzheSR6BfqqU",
        dq: "o3Kpu8svJzgBqJ0uPTYcEXo6Lo8z1Amv5-V6RimzAEBVeKElN5d4yBWoOTgevYPmLYf5EVqhPL8JskbUFwSm7SUzbXEeUaAgS494kWSu_pGeG90fAHFvr9qaKo8v6kVXtXYf0-25oiMd8MT2Ab8Bg59iJ2XTnzcWXzDaN0_LfCs",
        qi: "ZEuwTKKEDDAW16uNcpcCRALtOKATi_7SsLNbq-zTMakh3YLXOAYD9YwF4wqwtJwoKKVEsS22ySBj7PRodHQcve25ULS3kqSFjBWLgQrulmWQXKtoAEVfvil-kfpyp-Tf2AcWwN-vT44y1LoidYF-zK-1ZJA0wzJKF9FxEn4h5H8",
        kid: "7QoEhAq4Wz0SjiTEB2vfvmM5xlI6P4y990Awx1vf1Tw",
        use: "sig",
        alg: "RS256",
      },
    ],
  },
};

module.exports = config;
