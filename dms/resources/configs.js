ccm.files[ 'configs.js' ] = {

  "local": {
    "css.3": "../dms/resources/default.css",
    "data.store.1": "../dms/resources/datasets.js",
    "component_icon": "../dms/resources/component.png",
    "publish_form.2.css.2": "../dms/resources/submit.css",
    "rating_result.2.css.3": "../dms/resources/rating_result.css",
    "comp_info": [ "ccm.component", "../comp_info/ccm.comp_info.js", [ "ccm.get", "../comp_info/resources/configs.js", "local" ] ]
  },

  "localhost": {
    "css.3": "../dms/resources/default.css",
    "data.store.1": { "store": "components", "url": "http://localhost:8080" },
    "data.key": "{}",
    "component_icon": "../dms/resources/component.png",
    "publish_form.2.css.2": "../dms/resources/submit.css",
    "rating_result.2.css.3": "../dms/resources/rating_result.css",
    "rating_result.2.data.store.1": { "store": "component_ratings", "url": "http://localhost:8080" },
    "comp_info.1": "../comp_info/ccm.comp_info.js"
  },

  "live": {
    "data.store.1": { "store": "components", "url": "https://ccm2.inf.h-brs.de" },
    "rating_result.2.data.store.1": { "store": "component_ratings", "url": "https://ccm2.inf.h-brs.de" }
  }

};