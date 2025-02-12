const knex = require('../knex');

class Comments {

//   constructor({ userid, ai_response, user_response}) {
//     this.userid = userid;
//     this.ai_response = ai_response;
//     this.user_response = user_response;
//   }

//   static async list() {
//     try {
//       const query = 'SELECT * FROM chatbox';
//       const { rows } = await knex.raw(query);
//       return rows;
//     } catch(error) {
//       console.log(error);
//       return [];
//     }
//   }

  static async create(username,comment, discussion_board_id) {
   // console.log("c-Comments",username,comment, discussion_board_id)
    try {
      const query = `
        INSERT INTO comments (username,comment, discussion_board_id)
        VALUES (?, ?, ?)
        RETURNING *
      `;
      
      const { rows: [comments] }  = await knex.raw(query, [username,comment, discussion_board_id]);
     // console.log("chats created by model for comments", comments)
      return new comments;
    } catch(error) {
      console.log(error);
      return null;
    }
  }
  

  static async find(id) {
    //console.log("chats found by id number", id)
    try {
      const query = 'SELECT * FROM comments WHERE discussion_board_id = ?';
      const { rows } = await knex.raw(query, [id]);
      
      //console.log("chats found by id by model for comments", rows)
      return rows;
      //new Chatbox(chats);

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
//   const attempt = await Comments.create("testing to comment",2,1); // Corrected method call
//   console.log("test comments model",attempt);
// };
// test();

module.exports = Comments;
