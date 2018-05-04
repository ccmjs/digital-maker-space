ccm.files[ 'configs.js' ] = {

  "publish_form": {
    "css": [ "ccm.load",
      { "context": "head", "url": "https://tkless.github.io/ccm-components/libs/bootstrap/css/font-face.css" },
      "https://tkless.github.io/ccm-components/libs/bootstrap/css/bootstrap.css",
      "resources/submit.css" ],
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
                  "inner": "Enter the URL to the component version file. Example: <code>https://ccmjs.github.io/digital-maker-space/versions/ccm.dms-1.0.0.js</code>"
                }
              ]
            },
            {
              "tag": "input",
              "type": "url",
              "id": "url-input",
              "class": "form-control",
              "name": "url",
              "pattern": ".*ccm\\.([a-z][a-z0-9_]*)(-(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*))(\\.js)$",
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
              "type": "text",
              "id": "homepage-input",
              "class": "form-control",
              "name": "homepage"
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
              "name": "name"
            }
          ]
        },
        {
          "id": "licence",
          "class": "form-group",
          "inner": [
            {
              "tag": "label",
              "id": "licence-label",
              "for": "licence-input",
              "class": "control-label required",
              "inner": "Licence"
            },
            {
              "tag": "span",
              "id": "licence-help",
              "class": "help",
              "inner": [
                {
                  "tag": "a",
                  "id": "licence-icon",
                  "inner": {
                    "class": "glyphicon glyphicon-info-sign"
                  }
                },
                {
                  "id": "licence-info",
                  "class": "alert alert-info",
                  "inner": "Components can only be published as free software under MIT license."
                }
              ]
            },
            {
              "tag": "input",
              "type": "text",
              "id": "licence-input",
              "class": "form-control",
              "value": "MIT Licence",
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
  }

};