const findChat = async (req, res) => {

    const {
        // session, 
      db: { Chatbox }, // this req.db.User property is put here by the addModelsToRequest middleware
      //params: { id }, // this req.params.id is a part of the request URL
      body: {userid }, 
    } = req;
  
    const foundChats = await Chatbox.find(userid);
    //if (!user) return res.sendStatus(404);
  
   es.send(foundChats);
  };
  
  module.exports = findChat;
  