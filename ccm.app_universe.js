/**
 * @overview ccm component app universe
 * @author Tea Kless <tea.kless@web.de>, 2018
 * @license The MIT License (MIT)
 *
 * TODO select box for versions in details view
 */
( function () {

  var component = {

    name: 'app_universe',

    ccm: 'https://ccmjs.github.io/ccm/ccm.js',

    config: {
      html: {
        "main": {
          "inner": [
            {
              "id": "header",
              "class": "navbar",
              "inner": [
                {
                  "tag": "a",
                  "class": "logo",
                  "onclick": "%all_components%",
                  "inner": "AppUniverse"
                },
                {
                  "tag": "a",
                  "inner": "Sign On"
                },
                {
                  "tag": "a",
                  "inner": "Add New",
                  "onclick": "%new%"
                }
              ]
            },
            {
              "id": "content"
            },
            {
              "id": "footer",
              "inner": [
                {
                  "tag": "p",
                  "id": "footer-text",
                  "inner": "Place for Publish, Create and Sharing of <a href='https://github.com/ccmjs'><i>ccm</i></a> Components !!!"
                }
              ]
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
                        "inner": "Create"
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
      data: { store: [ 'ccm.store', 'resources/datasets.js' ], key: {} },
      submit: [ "ccm.component", "https://ccmjs.github.io/akless-components/submit/versions/ccm.submit-2.1.0.min.js" ],

      rating: [ "ccm.component",  "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-1.0.0.js", {
        star_title: [ "Gefällt mir gar nicht", "Gefällt mir nicht", "Ist Ok", "Gefällt mir", "Gefällt mir sehr" ],
        //user:  [ 'ccm.instance', 'https://ccmjs.github.io/akless-components/user/versions/ccm.user-4.0.1.min.js' ],
          data: {
            store: [ "ccm.store", { store: 'app_universe_components_ratings', url: 'http://localhost:8080' } ]
          }
      }],
      rating_result: [ "ccm.component",  "https://ccmjs.github.io/tkless-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.js", {
        data: {
          store: [ "ccm.store", { store: 'app_universe_components_ratings', url: 'http://localhost:8080' } ]
        }
      }],
      crud_app: [ "ccm.component",  "https://ccmjs.github.io/akless-components/crud_app/versions/ccm.crud_app-2.0.0.js" ],
      libs: [ 'ccm.load',
        { context: 'head', url: 'https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css' },
        'https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css',
        'resources/default.css'
      ]
     },

    Instance: function () {
      /**
       *
       * own reference for inner functions
       * @type {Instance}
       */
      const self = this;

      /**
       * privatized instance members
       * @type {object}
       */
      let my;

      /**
       * shortcut to help functions
       * @type {Object.<string,function>}
       */
      let $;

      let data;

      this.ready = callback => {

        // set shortcut to help functions
        $ = self.ccm.helper;

        // privatize all possible instance members
        my = $.privatize( self );

        if ( self.logger ) self.logger.log( 'ready', my );

        callback();

      };

      /**
       * starts the instance
       * @param {function} [callback] - called after all synchronous and asynchronous operations are complete
       */
      this.start = callback => {

        let main_elem;

        $.dataset( my.data, function ( dataset ) {
          data = dataset;

          main_elem = $.html( my.html.main, {
            all_components: function() {
              changeSelctedManueItem( this );
              renderListView();
            },
            new: function () {
              changeSelctedManueItem( this );
              renderFormAddNewComponent();
            }
          } );
          renderListView();

          $.setContent( self.element, main_elem );

          callback && callback();
        });


        function renderListView() {

          for( let key in data ) {
            const entry = $.html( my.html.entry, {
              title:  data[ key ].title,
              developer: data[ key ].developer,
              component: function ( ) {
                changeSelctedManueItem( this );
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
              title:  data[ key ].title,
              abstract:  data[ key ].abstract,
              details: function(){ renderDetails( key ); },
              demo: function () {
                if (  !data[ key ].demos ) return;

                $.setContent( comp_elem.querySelector( '.content' ), '');
                ccm.start( data[ key ].versions[0].minified ? data[ key ].versions[0].minified : data[ key ].versions[0].source, data[ key ].demos[0], function (instance) {
                  self.element.querySelector( '.content' ).appendChild( instance.root );
                } );
              },
              edit_component: function () {
                $.setContent( comp_elem.querySelector( '.content' ), '');

                self.element.querySelector( '#content' ).classList.remove( 'flex' );
                my.submit.start( {
                  "key": ["ccm.get", "resources/configs.js", "add_new_component"],
                  "data": { store: my.data.store, key: data[ key ].key },
                  "onfinish.callback": function ( instance, results ) {
                    my.data.store.set( data[ data.length ] = results, () => {
                      self.start();
                    });
                  },
                  "onfinish.restart": true
                  },  function ( instance ) {
                  self.element.querySelector( '.content' ).appendChild( instance.root );
                } );
              },
              create: function () {
                console.log(data[ key ].versions[ 0 ].source);
                my.crud_app.start( {
                  "builder": [ "ccm.component", data[ key ].factories[ 0 ] ],
                  "store": [ "ccm.store", { "store": "universe_"+ data[ key ].key, "url": "https://ccm2.inf.h-brs.de" } ],
                  "url": data[ key ].versions[ 0 ].source
                } , function ( instance) {
                  self.element.querySelector( '.content' ).appendChild( instance.root );
                } )
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
              comp_name: data[ key ].key,
              versions: "1.0.0",
              developer: data[ key ].developer,
              licence: data[ key ].license,
              website: data[ key ].website || ''
            } );

            self.element.querySelector( '.content' ).innerHTML = '';
            self.element.querySelector( '.content' ).appendChild( detail_elem );
          }
        }

        function renderFormAddNewComponent() {
          self.element.querySelector( '#content' ).classList.remove( 'flex' );
          my.submit.start( {
            "key": ["ccm.get", "resources/configs.js", "add_new_component" ],
            "onfinish.callback": function ( instance, results ) {
              my.data.store.set( data[ data.length ] = results, () => {
                self.start();
              });
            },
            "onfinish.confirm": "Are you sure, you want to publish the Component?"
          },  function ( instance ) {
            self.element.querySelector( '#content' ).appendChild( instance.root );
          } );
        }

        function changeSelctedManueItem( item ) {
          [ ...self.element.querySelectorAll( 'a' )].map( a => { a.classList.remove( 'active' ); });
          self.element.querySelector( '#content' ).innerHTML = '';
          if( item ) item.classList.toggle( 'active' );
        }
      };
    }
  };

  function p(){window.ccm[v].component(component)}var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}() );