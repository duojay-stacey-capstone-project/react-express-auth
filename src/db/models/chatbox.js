const knex = require('../knex');

class Chatbox {

  constructor({ userid, ai_response, user_response}) {
    this.userid = userid;
    this.ai_response = ai_response;
    this.user_response = user_response;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM chatbox';
      const { rows } = await knex.raw(query);
      return rows.map((chat) => new Chatbox(chat));
    } catch(error) {
      console.log(error);
      return [];
    }
  }

  static async create(userid, ai_response, user_response) {
    try {
      const query = `
        INSERT INTO chatbox (userid, ai_response, user_response)
        VALUES (?, ?, ?)
        RETURNING *
      `;
  
      console.log(query, [userid, ai_response, user_response]); // Print the query
      
      const { rows: [chat] }  = await knex.raw(query, [userid, ai_response, user_response]);
      return new Chatbox(chat);
    } catch(error) {
      console.log(error);
      return null;
    }
  }
  

  static async find(id) {
    try {
      const query = 'SELECT * FROM chatbox WHERE id = ?';
      const { rows: [chats] } = await knex.raw(query, [id]);
      console.log(chats)
      return chats ? new Chatbox(chats) : null;

    } catch(error) {
      console.log(error);
      return null;
    }
  }


  static async deleteAll() {
    try {
      return knex('chatbox').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }
}

// const test = async () => {
//   const attempt = await Chatbox.create(1,"testing","testing"); // Corrected method call
//   console.log(attempt);
// };
// test();

module.exports = Chatbox;