jade.templates = {};
jade.render = function(node, template, data) {
  var htmlElement = jade.templates[template](data);
  node.html(htmlElement);
  return $(htmlElement);
};

jade.append = function(node, template, data) {
  var htmlElement = jade.templates[template](data);
  node.append(htmlElement);
  return $(htmlElement);
};
