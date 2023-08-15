// controllers/controller.js
const getData = (req, res) => {
    const responseData = {
      message: 'Hello my name is alen'
    };
    
    res.json(responseData);
  };
  
  module.exports = { getData };
  