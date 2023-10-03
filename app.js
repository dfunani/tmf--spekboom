const { qapmMiniSdkStart } = require("new.qapm.js");

function qapmInit() {
  // 此处这些配置请参考 QAPM 接入文档进行修改
  const QAPM_INIT_OPTION = {
    qapm_base_url: "https://ten.sngapm.qq.com", // (必填)请将本域名添加到小程序域名白名单
    app_key: 'b1fa4a05-354', // (必填)填写从qapm的web上获取的app_key
    version: "1.0.1", // (必填)填写小程序的版本号
    user_id: 'smithdeng123', // (必填)用户的id,需要开发者自己设置
  }

  try {
    qapmMiniSdkStart(QAPM_INIT_OPTION);
  } catch (e) {
    console.log("qapm mini sdk error", e);
  }
}

//app.js
App({
  onLaunch: function () {
    qapmInit();
    // show localstorage
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // login
    wx.login({
      success: res => {
        // get custom login info res
      }
    })
    // get user settings
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // Already authorized, you can directly call getUserInfo to get the avatar nickname without popping up
          wx.getUserInfo({
            success: res => {
              // get custom user info res
              this.globalData.userInfo = res.userInfo;
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    countrySelected: "Spekboom",
    introHead: "DISCOVER AFRICA",
    static: [
      {
        "name": "countries",
        content: [
          "Mozambique",
          "South Africa",
          "Zimbabwe",
          "Botswana",
          "Swaziland",
          "Zambia",
          "Kenya",
          "Mauritius",
        ],
        "Mozambique": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-1.png", accomodations: [

          ]
        },
        "South Africa": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-2.jpeg", accomodations: [
            {
              name: "Danielskraal Guest Farm",
              title: "ShortName",
              logo: "Danielskraal-featured.jpeg",
              tags: ["featured", "Self-Catering"],
              content: []
            },
            {
              name: "De Hoek Manor",
              title: "ShortName",
              logo: "DeHoekManor-featured.jpeg",
              tags: ["featured", "Self-Catering"],
              content: []
            }, {
              name: "Kwetu Guest Farm",
              title: "ShortName",
              logo: "kwetu-featured.png",
              tags: ["featured", "Self-Catering"],
              content: []
            }, {
              name: "Tintswalo at Boulders",
              title: "ShortName",
              logo: "Tintswalo-featured.jpeg",
              tags: ["featured", "Self-Catering"],
              content: []
            }, {
              name: "Bartholomeus Klip Farmhouse",
              title: "ShortName",
              logo: "Bartholomeus-featured.jpeg",
              tags: ["featured", "Self-Catering"],
              content: []
            }, {
              name: "Merindol Manor AA Badenhorst Family Wines",
              title: "ShortName",
              logo: "Merindol-featured.jpeg",
              tags: ["featured", "Self-Catering"],
              content: []
            },
            {
              name: "Nima Lodge",
              title: "ShortName",
              logo: "Nima-Lodge-cabin.jpeg",
              tags: ["cabin", "Self-Catering"],
              content: []
            },
            {
              name: "Copia Cabins",
              title: "ShortName",
              logo: "copia-cabin.png",
              tags: ["cabin", "Self-Catering"],
              content: []
            }, {
              name: "The Ecotreehouse",
              title: "ShortName",
              logo: "EcoTreeHouse-Cabin.png",
              tags: ["cabin", "Self-Catering"],
              content: []
            }, {
              name: "Zielenrust",
              title: "ShortName",
              logo: "Zielenrust-cabin.jpeg",
              tags: ["cabin", "Self-Catering"],
              content: []
            }, {
              name: "Hide I Montagu",
              title: "ShortName",
              logo: "Hide-Montagu-cabin.jpeg",
              tags: ["cabin", "Self-Catering"],
              content: []
            }, {
              name: "Riversend Farm Stanford",
              title: "ShortName",
              logo: "rivers-end-farm-cabin.png",
              tags: ["cabin", "Self-Catering"],
              content: []
            },
            {
              name: "Woodlands",
              title: "ShortName",
              logo: "Woodlands.jpeg",
              tags: ["cabin", "Self-Catering"],
              content: []
            },
            {
              name: "Villa Coloniale",
              title: "ShortName",
              logo: "Villa-Coloniale-karoo.png",
              tags: ["karoo"],
              content: []
            }, {
              name: "Khwai Tented Camp",
              title: "ShortName",
              logo: "Khwai Tented Karoo.png",
              tags: ["karoo"],
              content: []
            }, {
              name: "Danielskraal Guest Farm",
              title: "ShortName",
              logo: "Danielskraal-karoo.jpg",
              tags: ["karoo"],
              content: []
            },
            {
              name: "The Homestead at Boesmanrug",
              title: "ShortName",
              logo: "The-Homestead-karoo.jpeg",
              tags: ["karoo"],
              content: []
            },
          ]
        },
        "Zimbabwe": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-3.jpeg", accomodations: []
        },
        "Botswana": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-4.jpeg", accomodations: []
        },
        "Swaziland": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-5.jpeg", accomodations: []
        },
        "Zambia": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-6.jpeg", accomodations: []
        },
        "Kenya": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-7.jpeg", accomodations: []
        },
        "Mauritius": {
          slogan: "\"There are no shortcuts to the top of the palm tree.\" - Mozambican Proverb",logo: "Country-8.jpeg", accomodations: []
        }
      },
      { "name": "initiatives", "content": ["Spekboom Fund"] },
      {
        "name": "local brands", "content": [
          "Discover Brands"
        ]
      },
      {
        "name": "get in touch", "content": [
          "Our Story",
          "Contact us",
          "Privacy Policy",
          "Terms of Use"
        ]
      },
      {
        "name": "partners", "content": ["ayoba",
          "SloeTree"]
      }
    ],
    favorite: {
      "country": "South Africa",
    }
  }
})