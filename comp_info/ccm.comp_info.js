/**
 * @overview ccm component for component information's
 * @author André Kless <andre.kless@web.de>, 2018
 * @author Tea Kless <tea.kless@web.de>, 2018
 * @license MIT License
 */

{
  var component = {

    /**
     * unique component name
     * @type {string}
     */
    name: 'comp_info',

    /**
     * recommended used framework version
     * @type {string}
     */
    ccm: 'https://ccmjs.github.io/ccm/ccm.js',

    /**
     * default instance configuration
     * @type {Object}
     */
    config: {
      "html": {
        "main": {
          "id": "main",
          "class": "container",
          "inner": [
            {
              "id": "header",
              "inner": [
                {
                  "id": "header-left",
                  "inner": {
                    "tag": "img",
                    "src": "%icon%"
                  }
                },
                {
                  "id": "header-right",
                  "inner": [
                    {
                      "id": "header-top",
                      "inner": [
                        {
                          "tag": "span",
                          "id": "header-title",
                          "inner": "%title%"
                        },
                        {
                          "tag": "span",
                          "id": "header-version",
                          "inner": "%version%"
                        }
                      ]
                    },
                    {
                      "id": "header-developer",
                      "inner": "%developer%"
                    },
                    {
                      "id": "header-rating"
                    },
                    {
                      "id": "header-abstract",
                      "inner": "%abstract%"
                    }
                  ]
                }
              ]
            },
            {
              "id": "buttons",
              "inner": {
                "class": "btn-group",
                "inner": [
                  {
                    "tag": "button",
                    "id": "button-info",
                    "class": "btn btn-info",
                    "onclick": "%info%",
                    "inner": "Info"
                  },
                  {
                    "tag": "button",
                    "id": "button-demo",
                    "class": "btn btn-primary",
                    "onclick": "%demo%",
                    "inner": "Demo"
                  },
                  {
                    "tag": "button",
                    "id": "button-create",
                    "class": "btn btn-success",
                    "onclick": "%create%",
                    "inner": "Create App"
                  }/*,
                  {
                    "tag": "button",
                    "id": "button-edit",
                    "class": "btn btn-warning",
                    "onclick": "%edit%",
                    "inner": "Edit"
                  }*/
                ]
              }
            },
            {
              "id": "content",
              "class": "container"
            }
          ]
        },
        "details": {
          "id": "info",
          "inner": [
            {
              "class": "page-header",
              "inner": {
                "tag": "h2",
                "inner": "Information"
              }
            },
            {
              "class": "lead"
            },
            {
              "class": "descr",
              "inner": {
                "tag": "h4",
                "inner": "Details"
              }
            },
            {
              "tag": "table",
              "class": "table table-striped",
              "inner": {
                "tag": "tbody",
                "inner": [
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Component Name"
                      },
                      {
                        "tag": "td",
                        "inner": "%comp_name%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Versions"
                      },
                      {
                        "tag": "td",
                        "inner": "%versions%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Developer"
                      },
                      {
                        "tag": "td",
                        "inner": "%developer%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Website"
                      },
                      {
                        "tag": "td",
                        "inner": {
                          "tag": "a",
                          "href": "%website%",
                          "inner": "%website%"
                        }
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "License"
                      },
                      {
                        "tag": "td",
                        "inner": "%license%"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      "css": [ "ccm.load",
        "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
        { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
        "https://ccmjs.github.io/digital-maker-space/comp_info/resources/default.css"
      ],
      "data": { "store": [ "ccm.store" ] },
      "component_icon": "https://ccmjs.github.io/digital-maker-space/dms/resources/component.png",
      "rating": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-1.0.0.js", {
        "data": { "store": [ "ccm.store" ] }
      } ],
      "crud_app": [ "ccm.component",  "https://ccmjs.github.io/akless-components/crud_app/versions/ccm.crud_app-2.0.0.js" ]

    },

    /**
     * for creating instances out of this component
     * @constructor
     */
    Instance: function () {

      /**
       * own reference for inner functions
       * @type {Instance}
       */
      const self = this;

      /**
       * privatized instance members
       * @type {Object}
       */
      let my;

      /**
       * shortcut to help functions
       * @type {Object.<string,function>}
       */
      let $;

      /**
       * is called once after the initialization and is then deleted
       * @param {function} callback - called after all synchronous and asynchronous operations are complete
       */
      this.ready = callback => {

        // set shortcut to help functions
        $ = self.ccm.helper;

        // privatize all possible instance members
        my = $.privatize( self );

        // has logger instance? => log 'ready' event
        self.logger && self.logger.log( 'ready', $.clone( my ) );

        callback();
      };

      /**
       * starts the instance
       * @param {function} [callback] - called after all synchronous and asynchronous operations are complete
       */
      this.start = callback => {

        // get component dataset
        $.dataset( my.data, dataset => {

          /**
           * main HTML structure
           * @type {Element}
           */
          const main_elem  = $.html( my.html.main, {
            icon: my.component_icon,
            title: dataset.title,
            version: dataset.version ? dataset.version.join( '.' ) : '1.0.0',
            developer: dataset.developer,
            abstract:  dataset.abstract,
            info: function () { renderDetails( dataset ); },
            demo: function () {
              if ( !dataset.demos ) return;

              $.setContent( main_elem.querySelector( '#content' ), '' );
              ccm.start( dataset.versions[0].minified ? dataset.versions[0].minified : dataset.versions[0].source, dataset.demos[0], function (instance) {
                self.element.querySelector( '#content' ).appendChild( instance.root );
              } );
            },
            create: function () {
              my.crud_app.start( {
                root: self.element.querySelector( '#content' ),
                "builder": [ "ccm.component", dataset.factories[ 0 ].url, dataset.factories[ 0 ].config ],
                "store": [ "ccm.store", { "store": "universe_"+ dataset.key, "url": "https://ccm2.inf.h-brs.de" } ],
                "url": dataset.versions[ 0 ].source
              } );
            },
            edit: function () {
              $.setContent( main_elem.querySelector( '.content' ), '');

              self.element.querySelector( '#content' ).classList.remove( 'flex' );
              my.submit.start( {
                "key": ["ccm.get", "resources/configs.js", "publish_form"],
                "data": { store: my.data.store, key: dataset.key },
                "onfinish.callback": function ( instance, results ) {
                  my.data.store.set( components[ components.length ] = results, () => {
                    self.start();
                  });
                },
                "onfinish.restart": true
              },  function ( instance ) {
                self.element.querySelector( '.content' ).appendChild( instance.root );
              } );
            }
          } );

          // render rating of component
          my.rating.start( { 'data.key': dataset.key + ( dataset.version ? '-' + dataset.version.join( '-' ) : '' ), star_title: [ '', '', '', '', '' ] }, instance => $.setContent( main_elem.querySelector( '#header-rating' ), instance.root ) );

          $.setContent( self.element, main_elem );

          renderDetails( dataset );
          main_elem.querySelector( '#button-info' ).classList.add( 'active' );

          // bring prepared own content into frontend
          $.setContent( self.element, main_elem );

          callback && callback();

          function renderDetails( component ) {

            const detail_elem = $.html( my.html.details, {
              comp_name: component.key,
              versions: "1.0.0",
              developer: component.developer,
              license: component.license,
              website: component.website || ''
            } );

            self.element.querySelector( '#content' ).innerHTML = '';
            self.element.querySelector( '#content' ).appendChild( detail_elem );

          }

        } );

      };
    }

  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}