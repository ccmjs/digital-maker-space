/**
 * @overview ccm component for digital maker space
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
                  "id": "buttons",
                  "inner": [
                    {
                      "id": "button-browse_apps",
                      "class": "button",
                      "inner": "Browse Apps",
                      "onclick": "%browse_apps%"
                    },
                    {
                      "id": "button-publish_app",
                      "class": "button",
                      "inner": "Publish App",
                      "onclick": "%publish_app%"
                    },
                    {
                      "id": "button-all_components",
                      "class": "button",
                      "inner": "All Components",
                      "onclick": "%all_components%"
                    },
                    {
                      "id": "button-publish",
                      "class": "button",
                      "inner": "Publish Component",
                      "onclick": "%publish%"
                    },
                    {
                      "id": "log_in",
                      "class": "button",
                      "inner": "Log In"
                    }
                  ]
                }
              ]
            },
            {
              "id": "content"
            },
            {
              "id": "footer",
              "inner": {
                "inner": "Publish, Create and Share <a href='https://github.com/ccmjs'><i>ccm</i></a> Components and Modular Apps"
              }
            }
          ]
        },
        "entry": {
          "class": "entry",
          "onclick": "%click%",
          "inner": [
            {
              "class": "left",
              "inner": {
                "tag": "img",
                "src": "%icon%"
              }
            },
            {
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
        }
      },
      "css": [ "ccm.load",
        "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
        { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
        "https://ccmjs.github.io/digital-maker-space/dms/resources/default.css"
      ],
      "data": { "store": [ "ccm.store" ], "key": {} },
      "component_icon": "https://ccmjs.github.io/digital-maker-space/dms/resources/component.png",
      "message": "No published Components to display.",
      "listing": [ "ccm.component", "https://ccmjs.github.io/akless-components/listing/versions/ccm.listing-1.0.0.js" ],
      "publish_form": [ "ccm.instance", "https://ccmjs.github.io/akless-components/submit/versions/ccm.submit-3.1.1.js", {
        "css": [ "ccm.load",
          "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
          "https://ccmjs.github.io/digital-maker-space/dms/resources/submit.css"
        ],
        "inner": {
          "id": "main",
          "class": "container",
          "inner": [
            {
              "id": "title",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "title-label",
                  "for": "title-input",
                  "class": "control-label required",
                  "inner": "Title"
                },
                {
                  "tag": "span",
                  "id": "title-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "title-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "title-info",
                      "class": "alert alert-info",
                      "inner": "Specify the title of your component."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "title-input",
                  "class": "form-control",
                  "name": "title",
                  "required": true
                }
              ]
            },
            {
              "id": "url",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "url-label",
                  "for": "url-input",
                  "class": "control-label required",
                  "inner": "URL"
                },
                {
                  "tag": "span",
                  "id": "url-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "url-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "url-info",
                      "class": "alert alert-info",
                      "inner": "Enter the URL to the component version file."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "url",
                  "id": "url-input",
                  "class": "form-control",
                  "name": "url",
                  "pattern": ".*/ccm\\.([a-z][a-z0-9_]*)(-(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*))(\\.js)$",
                  "placeholder": "https://ccmjs.github.io/digital-maker-space/versions/ccm.dms-1.0.0.js",
                  "title": "The filename of the component must start with 'ccm.' followed by the unique component name and then a '-' followed by the component version number and a '.js' in the end. Example: ccm.dms-1.0.0.js",
                  "required": true
                }
              ]
            },
            {
              "id": "abstract",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "abstract-label",
                  "for": "abstract-input",
                  "class": "control-label",
                  "inner": "Abstract"
                },
                {
                  "tag": "span",
                  "id": "abstract-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "abstract-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "abstract-info",
                      "class": "alert alert-info",
                      "inner": "Enter a short component description."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "abstract-input",
                  "class": "form-control",
                  "name": "abstract"
                }
              ]
            },
            {
              "id": "description",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "description-label",
                  "for": "description-input",
                  "class": "control-label",
                  "inner": "Description"
                },
                {
                  "tag": "span",
                  "id": "description-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "description-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "description-info",
                      "class": "alert alert-info",
                      "inner": "Enter a long description of component."
                    }
                  ]
                },
                {
                  "tag": "textarea",
                  "id": "description-input",
                  "class": "form-control",
                  "name": "description"
                }
              ]
            },
            {
              "id": "homepage",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "homepage-label",
                  "for": "homepage-input",
                  "class": "control-label",
                  "inner": "Homepage"
                },
                {
                  "tag": "span",
                  "id": "homepage-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "homepage-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "homepage-info",
                      "class": "alert alert-info",
                      "inner": "Enter the homepage URL of the component."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "url",
                  "id": "homepage-input",
                  "class": "form-control",
                  "name": "homepage",
                  "placeholder": "https://github.com/ccmjs/digital-maker-space"
                }
              ]
            },
            {
              "id": "developer",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "developer-label",
                  "for": "developer-input",
                  "class": "control-label",
                  "inner": "Developer"
                },
                {
                  "tag": "span",
                  "id": "developer-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "developer-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "developer-info",
                      "class": "alert alert-info",
                      "inner": "Enter the name of the developer who developed the component."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "developer-input",
                  "class": "form-control",
                  "name": "developer"
                }
              ]
            },
            {
              "id": "license",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "license-label",
                  "for": "license-input",
                  "class": "control-label required",
                  "inner": "License"
                },
                {
                  "tag": "span",
                  "id": "license-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "license-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "license-info",
                      "class": "alert alert-info",
                      "inner": "Components can only be published as free software under MIT license."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "license-input",
                  "class": "form-control",
                  "name": "license",
                  "value": "MIT License",
                  "pattern": "MIT License",
                  "disabled": true,
                  "required": true
                }
              ]
            },
            {
              "tag": "input",
              "type": "submit",
              "id": "button-submit",
              "class": "btn btn-success btn-lg",
              "value": "Publish Component"
            }
          ]
        }
      } ],
      "rating_result": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.js", {
        "css": [ "ccm.load",
          { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" },
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
          "https://ccmjs.github.io/digital-maker-space/dms/resources/rating_result.css"
        ],
        "data": { "store": [ "ccm.store" ] }
      } ],
      "comp_info": [ "ccm.component", "https://ccmjs.github.io/digital-maker-space/comp_info/ccm.comp_info.js" ],
      "resource_finder": [ "ccm.instance", "https://ccmjs.github.io/leck-components/resource_finder/dist/ccm.resource_finder-0.1.0.js" ],
      "resource_publish": [ "ccm.instance", "https://ccmjs.github.io/leck-components/resource_publish/dist/ccm.resource_publish-0.3.0.js" ]
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
       * Ensures that the resource finder is only started once
       * @type {boolean}
       */
      let resource_finder_started = false;

      /**
       * Ensures that the resource publish is only started once
       * @type {boolean}
       */
      let resource_publish_started = false;

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
            browse_apps: function () {
              changeSelectedMenuEntry( this );
              window.location.hash = `dms-navigation=browseapps`;
            },
            publish_app: function () {
              changeSelectedMenuEntry( this );
              window.location.hash = `dms-navigation=publishapp`;
            },
            all_components: function () {
              changeSelectedMenuEntry( this );
              window.location.hash = `dms-navigation=allcomponents`;
            },
            publish: function () {
              changeSelectedMenuEntry( this );
              window.location.hash = `dms-navigation=publishcomponent`;
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

          window.addEventListener('hashchange', function() {
            const urlHash = window.location.hash.substr(1);
            const hashParameters = urlHash.split('&');
            hashParameters.forEach(parameter => {
              const key = parameter.split('=')[0];
              const value = parameter.split('=')[1];
              switch (key) {
                case 'dms-navigation':
                  navigateTo(value);
                  break;
                default:
                //console.log(`Unknown URL parameter: ${key}`);
              }
            });
          });

          let urlHash = window.location.hash.substr(1);
          if (urlHash !== '') {
            const hashParameters = urlHash.split('&');
            hashParameters.forEach(parameter => {
              const key = parameter.split('=')[0];
              const value = parameter.split('=')[1];
              switch (key) {
                case 'dms-navigation':
                  navigateTo(value);
                  break;
                default:
                //console.log(`Unknown URL parameter: ${key}`);
              }
            });
          } else {
            window.location.hash = `dms-navigation=allcomponents`;
          }

          callback && callback();

          function navigateTo(target) {
            switch (target) {
              case 'browseapps':
                changeSelectedMenuEntry( main_elem.querySelector('#button-browse_apps') );
                renderBrowseApps();
                break;
              case 'publishapp':
                changeSelectedMenuEntry( main_elem.querySelector('#button-publish_app') );
                renderPublishApp();
                break;
              case 'allcomponents':
                changeSelectedMenuEntry( main_elem.querySelector('#button-all_components') );
                renderAllComponents();
                break;
              case 'publishcomponent':
                changeSelectedMenuEntry( main_elem.querySelector('#button-publish') );
                renderPublishForm();
                break;
              default:
                console.log(`Unknown navigation target: ${target}`);
            }
          }

          /** renders browse apps */
          function renderBrowseApps() {
            // view browse apps already active? => abort
            if ( content_elem.querySelector( '#browse_apps' ) ) return;

            // clear content area
            $.setContent( content_elem, $.html( { id: 'browse_apps' } ) );

            const browse_apps_elem = content_elem.querySelector( '#browse_apps' );
            if (!resource_finder_started) {
              self.resource_finder.start(() => {
                resource_finder_started = true;
              });
            }

            $.setContent( browse_apps_elem, self.resource_finder.root );

          }

          /** renders publish app */
          function renderPublishApp() {
            // view browse apps already active? => abort
            if ( content_elem.querySelector( '#publish_app' ) ) return;

            // clear content area
            $.setContent( content_elem, $.html( { id: 'publish_app' } ) );

            const publish_app_elem = content_elem.querySelector( '#publish_app' );
            if (!resource_publish_started) {
              self.resource_publish.start(() => {
                resource_publish_started = true;
              });
            }

            $.setContent( publish_app_elem, self.resource_publish.root );

          }

          /** renders all components */
          function renderAllComponents() {

            // view with all components already active? => abort
            if ( content_elem.querySelector( '#all_components' ) ) return;

            // clear content area
            $.setContent( content_elem, $.html( { id: 'all_components' } ) );

            // render listing of all components
            my.listing.start( {
              root: content_elem.querySelector( '#all_components' ),
              "html.entry": {
                "class": "entry",
                "inner": [
                  {
                    "class": "left",
                    "inner": {
                      "tag": "img",
                      "src": "%icon%"
                    }
                  },
                  {
                    "class": "right",
                    "inner": [
                      {
                        "class": "title",
                        "inner": "%title%",
                        "title": "%title%"
                      },
                      {
                        "class": "developer",
                        "inner": "%developer%",
                        "title": "%developer%"
                      },
                      { "class": "rating" }
                    ]
                  }
                ]
              },
              "css": [ "ccm.load", "https://ccmjs.github.io/digital-maker-space/dms/resources/listing.css" ],
              "data": { "store": [ "ccm.store", "https://ccmjs.github.io/digital-maker-space/dms/resources/datasets.js" ], "key": {} },
              "defaults": {
                "icon": "https://ccmjs.github.io/digital-maker-space/dms/resources/component.png"
              },
              sort: ( a, b ) => {
                const title_x = a.title.toLowerCase();
                const title_y = b.title.toLowerCase();
                const developer_x = ( a.developer || '' ).toLowerCase();
                const developer_y = ( b.developer || '' ).toLowerCase();
                if ( title_x < title_y ) return -1;
                if ( title_x > title_y ) return 1;
                if ( developer_x < developer_y ) return -1;
                if ( developer_x > developer_y ) return 1;
                return 0;
              },
              onrender: ( element, data ) => {
                my.rating_result.start( {
                  root: element.querySelector( '.rating' ),
                  'data.key': data.key
                } );
              },
              onclick: ( event, element, data ) => {
                changeSelectedMenuEntry();
                window.location.hash = ``;
                my.comp_info.start( {
                  data: {
                    store: my.data.store,
                    key: data.key
                  }
                }, instance => {
                  $.setContent( content_elem, instance.root )
                } );
              }
            } );

          }

          /** renders publish form */
          function renderPublishForm() {

            // view with all components already active? => abort
            if ( content_elem.querySelector( '#publish_form' ) ) return;

            // clear content area
            $.setContent( content_elem, $.html( { id: 'publish_form' } ) );

            /**
             * contains publish form
             * @type {Element}
             */
            const publish_form_elem = content_elem.querySelector( '#publish_form' );

            // start ccm instance for publish form
            self.publish_form.start( () => {

              // set 'onfinish' callback
              self.publish_form.onfinish = ( instance, component_dataset ) => {

                /**
                 * component version number
                 * @type {string[]}
                 */
                const version = $.getIndex( component_dataset.url ).split( '-' );

                /**
                 * unique component name
                 * @type {string}
                 */
                const name = version.shift();

                // add name and version number in component dataset
                component_dataset.key = name;
                component_dataset.version = version;
                component_dataset.license = 'MIT License';

                // check if unique component name already exists
                my.data.store.get( name, dataset => {
                  if ( dataset ) return alert( 'Component with unique name "' + name + '" already exists.' );

                  // make sure that the developer really wants to publish
                  if ( !window.confirm( 'Are you sure, you want to publish the Component?' ) ) return;

                  // save component dataset
                  my.data.store.set( component_dataset, () => { alert( 'Saved!' ); self.start(); } );

                } );

              };

              // put publish form into frontend
              $.setContent( publish_form_elem, self.publish_form.root );

              // set click events for help icons
              [ ...self.publish_form.element.querySelectorAll( '.help' ) ].map( help => help.addEventListener( 'click', function () {

                // show help text and hide other help texts
                const this_a = this;
                [ ...self.publish_form.element.querySelectorAll( '.help' ) ].map( other_a => other_a !== this_a && other_a.classList.remove( 'active' ) );
                this.classList.toggle( 'active' );

                // has logger instance? => log 'help' event
                self.logger && self.logger.log( 'help', { form: 'publish_component', name: this.id.split( '-' )[ 0 ], active: this.classList.contains( 'active' ) } );

              } ) );

            } );

          }

          /**
           * changes the selected header menu entry
           * @param {Element} [item] - clicked header button
           */
          function changeSelectedMenuEntry( item ) {
            [ ...main_elem.querySelectorAll( '#header .button' ) ].map( div => { div.classList.remove( 'active' ); } );
            item && item.classList.add( 'active' );
          }

        } );

      };
    }

  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}