var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth');

// app.get('/', (req, res) => res.send('Hello World!'))
router.get('/', function(request, response) {
    console.log(request.session);

    

    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
      <h2>${title}</h2>${description}
      <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
      `,                                                                          //template.HTML - control
      `<a href="/topic/create">create</a>`                                        //template.HTML - body
      ,auth.statusUI(request, response)                                            //template.HTML - authStatusUI
      );
    response.send(html);
});

module.exports = router;