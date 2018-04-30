ccm.files[ "configs.js" ] = {
  "add_new_component": {
    "css": [ "ccm.load",
      { context: "head", url: "https://tkless.github.io/ccm-components/libs/bootstrap/css/font-face.css" },
      "https://tkless.github.io/ccm-components/libs/bootstrap/css/bootstrap.css"
    ],
   "inner": '<div class="container">' +
     '<style> label { cursor: pointer; } label::before { content: "*"; color: red; }.btn { letter-spacing: 2px; }</style>'+
    '<form>'+
    ' <div class="form-group">'+
    '   <label for="title">Title:</label>'+
    '   <input required placeholder="Component name" type="text" class="form-control" id="title" name="title">'+
    ' </div>'+
    '    <div class="form-group">' +
    '       <label for="key">Component Name:</label>' +
    '      <input required pattern="^[a-zA-Z0-9_\\-]+$" placeholder="component_name_type" type="text" class="form-control" id="name" name="key">' +
    '    </div>'+
    '    <div class="form-group">' +
    '      <label for="developer">Developer:</label>' +
    '      <input required placeholder="First Name Last Name" type="text" class="form-control" id="developer" name="developer">' +
    '    </div>' +
    '    <div class="form-group">' +
    '      <label for="url">URL:</label>' +
    '      <input required placeholder="https://path/to/your/component/js/file" type="url" class="form-control" id="url" name="url">' +
    '    </div>' +
    '    <div class="form-group">' +
    '      <label for="abstract">Abstract:</label>' +
    '      <input required placeholder="General summary of your component" type="text" class="form-control" id="abstract" name="abstract">' +
    '    </div>' +
    '    <div class="form-group">' +
    '      <label for="descr">Description:</label>' +
    '      <input type="textarea" class="form-control" id="descr" name="description">' +
    '    </div>' +
     '   <div class="form-group">' +
     '       <label for="webseite">Website:</label>' +
     '       <input required placeholder="https://github.com/jhondoe/component" type="text" class="form-control" id="name" name="website">' +
     '    </div>'+
    '    <div class="form-group">' +
    '      <label for="licence">Licence:</label>' +
    '      <select class="form-control" id="licence" name="licence">' +
    '        <option>MIT Licence</option>' +
    '      </select>' +
    '    </div>' +
    '    <br>' +
    '    <button type="submit" id="submit" class="btn btn-info btn-lg save-btn">' +
    '      <span class="glyphicon glyphicon-save"></span>Save</button>' +
    '  </form>' +
    '</div>',
    "onfinish": {
      confirm: 'Are you sure, you want to save the Component?'
    }
  },
};