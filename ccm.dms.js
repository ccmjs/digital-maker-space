/**
 * @overview ccm component for digital maker space
 * @author Tea Kless <tea.kless@web.de>, 2018
 * @author André Kless <andre.kless@web.de>, 2018
 * @license The MIT License (MIT)
 *
 * TODO: select box for versions in details view
 */

{
  var component = {

    /**
     * unique component name
     * @type {string}
     */
    name: 'dms',

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
          "inner": [
            {
              "id": "header",
              "inner": [
                {
                  "id": "logo",
                  "inner": {
                    "tag": "span",
                    "onclick": "%all_components%",
                    "inner": "Digital Maker Space"
                  }
                },
                {
                  "id": "all_components",
                  "inner": "All Components",
                  "onclick": "%all_components%"
                },
                {
                  "id": "publish",
                  "inner": "Publish Component",
                  "onclick": "%publish%"
                },
                {
                  "id": "log_in",
                  "inner": "Log In"
                }
              ]
            },
            {
              "id": "content"
            },
            {
              "id": "footer",
              "inner": {
                "inner": "Place for Publish, Create and Sharing of <a href='https://github.com/ccmjs'><i>ccm</i></a> Components"
              }
            }
          ]
        },
        "entry": {
          "class": "entry",
          "onclick": "%component%",
          "inner": [
            {
              "class": "left",
              "inner": {
                "tag": "img",
                "src": "resources/img/component.png",
                //"class": "glyphicon glyphicon-paperclip"
              }
            },
            {
              "tag": "div",
              "class": "right",
              "inner": [
                {
                  "class": "title",
                  "inner": "%title%"
                },
                {
                  "class": "developer",
                  "inner": "%developer%"
                },
                {
                  "class": "rating"
                }
              ]
            }
          ]
        },
        "component": {
          "id": "component-view",
          "inner": [
            {
              "class": "header container",
              "inner": [
                {
                  "class": "nav",
                  "inner": [
                    {
                      "class": "left",
                      "inner": {
                        "tag": "img",
                        "src": "resources/img/component.png"
                      }
                    },
                    {
                      "class": "right",
                      "inner": [
                        {
                          "class": "top",
                          "inner": [
                            {
                              "class": "title",
                              "inner": "%title%"
                            },
                            {
                              "class": "rating",
                            }
                          ]
                        },
                        {
                          "class": "abstract",
                          "inner": "%abstract%"
                        }
                      ]
                    }
                  ]
                },
                {
                  "class": "text-center",
                  "inner": {
                    "class": "btn-group",
                    "inner": [
                      {
                        "tag": "button",
                        "id": "details-btn",
                        "class": "btn btn-info",
                        "onclick": "%details%",
                        "inner": "Info"
                      },
                      {
                        "tag": "button",
                        "class": "btn btn-primary",
                        "inner": "Demo",
                        "onclick": "%demo%"
                      },
                      {
                        "tag": "button",
                        "id": "create-btn",
                        "class": "btn btn-success",
                        "onclick": "%create%",
                        "inner": "Create App"
                      },
                      {
                        "tag": "button",
                        "class": "btn btn-warning",
                        "onclick": "%edit_component%",
                        "inner": "Edit"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "class": "content container",

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
                        "inner": "Licence"
                      },
                      {
                        "tag": "td",
                        "inner": "%licence%"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      "data": { "store": [ "ccm.store", "resources/datasets.js" ], "key": {} },
      "submit": [ "ccm.component", "https://ccmjs.github.io/akless-components/submit/versions/ccm.submit-3.1.0.js" ],
      "configs": [ "ccm.store", "resources/configs.js" ],

      rating: [ "ccm.component",  "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-1.0.0.js", {
        star_title: [ "Gefällt mir gar nicht", "Gefällt mir nicht", "Ist Ok", "Gefällt mir", "Gefällt mir sehr" ],
        //user:  [ 'ccm.instance', 'https://ccmjs.github.io/akless-components/user/versions/ccm.user-4.0.1.min.js' ],
          data: {
            store: [ "ccm.store", { store: 'app_universe_components_ratings', url: 'http://localhost:8080' } ]
          }
      } ],
      rating_result: [ "ccm.component",  "https://ccmjs.github.io/tkless-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.js", {
        data: {
          store: [ "ccm.store", { store: 'app_universe_components_ratings', url: 'http://localhost:8080' } ]
        }
      } ],
      crud_app: [ "ccm.component",  "https://ccmjs.github.io/akless-components/crud_app/versions/ccm.crud_app-2.0.0.js" ],
      libs: [ 'ccm.load',
        { context: 'head', url: 'https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css' },
        'https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css',
        'resources/default.css'
      ]
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
       * component datasets
       * @type {Object[]}
       */
      let components;

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

        // get component datasets
        $.dataset( my.data, datasets => { components = datasets;

          /**
           * main HTML structure
           * @type {Element}
           */
          const main_elem = $.html( my.html.main, {
            all_components: function () {
              changeSelectedMenuEntry( this );
              renderAllComponents();
            },
            publish: function () {
              changeSelectedMenuEntry( this );
              renderPublishForm();
            }
          } );

          /**
           * content area
           * @type {Element}
           */
          const content_elem = main_elem.querySelector( '#content' );

          // render all components
          renderAllComponents();

          // bring prepared own content into frontend
          $.setContent( self.element, main_elem );

          callback && callback();

          /** renders all components */
          function renderAllComponents() {
            main_elem.querySelector( '#content' ).innerHTML = '';

            for( let key in components ) {
              const entry = $.html( my.html.entry, {
                title:  components[ key ].title,
                developer: components[ key ].developer,
                component: function ( ) {
                  changeSelectedMenuEntry( this );
                  renderComponentView( key );
                }
              } );
              const content_elem = main_elem.querySelector( '#content' );
              content_elem.classList.add( 'flex' );
              content_elem.appendChild( entry );
              my.rating_result.start( { /*{ 'data.key': key },*/ }, function ( instance ) {
                entry.querySelector( '.rating' ).appendChild( instance.root );
              } );
            }

            function renderComponentView( key ) {

              const comp_elem  = $.html( my.html.component, {
                title:  components[ key ].title,
                abstract:  components[ key ].abstract,
                details: function(){ renderDetails( key ); },
                demo: function () {
                  if (  !components[ key ].demos ) return;

                  $.setContent( comp_elem.querySelector( '.content' ), '');
                  ccm.start( components[ key ].versions[0].minified ? components[ key ].versions[0].minified : components[ key ].versions[0].source, components[ key ].demos[0], function (instance) {
                    self.element.querySelector( '.content' ).appendChild( instance.root );
                  } );
                },
                edit_component: function () {
                  $.setContent( comp_elem.querySelector( '.content' ), '');

                  self.element.querySelector( '#content' ).classList.remove( 'flex' );
                  my.submit.start( {
                    "key": ["ccm.get", "resources/configs.js", "add_new_component"],
                    "data": { store: my.data.store, key: components[ key ].key },
                    "onfinish.callback": function ( instance, results ) {
                      my.data.store.set( components[ components.length ] = results, () => {
                        self.start();
                      });
                    },
                    "onfinish.restart": true
                  },  function ( instance ) {
                    self.element.querySelector( '.content' ).appendChild( instance.root );
                  } );
                },
                create: function () {
                  console.log(components[ key ].versions[ 0 ].source);
                  my.crud_app.start( {
                    root: self.element.querySelector( '.content' ),
                    "builder": [ "ccm.component", components[ key ].factories[ 0 ].url, components[ key ].factories[ 0 ].config ],
                    "store": [ "ccm.store", { "store": "universe_"+ components[ key ].key, "url": "https://ccm2.inf.h-brs.de" } ],
                    "url": components[ key ].versions[ 0 ].source
                  } );
                }
              } );

              // render star rating of component
              my.rating.start( /*{ 'data.key': key },*/ function ( instance ) {
                comp_elem.querySelector( '.rating' ).appendChild( instance.root );
              } );

              $.setContent( main_elem.querySelector( '#content' ), comp_elem );
              renderDetails( key );
              main_elem.querySelector( '#details-btn' ).classList.add( 'active' );
            }

            function renderDetails( key ) {
              console.log( 'details' );
              const detail_elem = $.html( my.html.details, {
                comp_name: components[ key ].key,
                versions: "1.0.0",
                developer: components[ key ].developer,
                licence: components[ key ].license,
                website: components[ key ].website || ''
              } );

              self.element.querySelector( '.content' ).innerHTML = '';
              self.element.querySelector( '.content' ).appendChild( detail_elem );
            }
          }

          /** renders publish form */
          function renderPublishForm() {

            my.submit.start( {
              root: content_elem,
              key: [ 'ccm.get', 'resources/configs.js', 'publish_form' ],
              'onfinish.store': { settings: 'resources/datasets.js' },
              'onfinish.confirm': 'Are you sure, you want to publish the Component?',
              onfinish: ( instance, component_dataset ) => {
                if ( !window.confirm( 'Are you sure, you want to publish the Component?' ) ) return;
                let version = $.getIndex( component_dataset.url ).split( '-' );
                const name = version.shift();
                component_dataset.key = name;
                component_dataset.version = version;
                my.data.store.set( component_dataset, () => { alert( 'Saved!' ); self.start(); } );
                return false;
              }
            }, instance => {

              // set click events for help icons
              [ ...instance.element.querySelectorAll( '.help' ) ].map( help => help.addEventListener( 'click', function () {

                // show help text and hide other help texts
                const this_a = this;
                [ ...instance.element.querySelectorAll( '.help' ) ].map( other_a => other_a !== this_a && other_a.classList.remove( 'active' ) );
                this.classList.toggle( 'active' );

                // has logger instance? => log 'help' event
                self.logger && self.logger.log( 'help', { form: 'publish_component', name: this.id.split( '-' )[ 0 ], active: this.classList.contains( 'active' ) } );

              } ) );

            } );

          }

          /**
           * changes the selected header menu entry
           * @param {Element} item - clicked header button
           */
          function changeSelectedMenuEntry( item ) {
            [ ...main_elem.querySelectorAll( '#header > div' ) ].map( div => { div.classList.remove( 'active' ); } );
            item.classList.add( 'active' );
          }

        } );

      };
    }

  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}