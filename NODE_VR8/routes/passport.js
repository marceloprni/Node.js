var db = require('./db');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/*
done(null, false)​ ​ – Indica que as credenciais estão inválidas; ​ 
​done(null, user)​ ​ – Repassa os dados do usuário autenticado; ​ 
​done(err)​ ​ – Repassa o erro apresentado no processo de autenticação (banco de dados indisponível, por exemplo).
*/


passport.use(new LocalStrategy((username,password,done)=> {
}));



passport.use(new LocalStrategy((username,password,done)=>{
    db("users")
      .where("username", username)
      .first()
      .then((user)=>{
          if(!user || user.password !== password){
             return done(null, false);
        }
  
        done(null, user)
      }, done);
  }));

passport.serializeUser((user, done)=>{
  done(null, user.id);
});
  
passport.deserializeUser((id, done)=>{
  db("users")
    .where("id", id)
    .first()
    .then((user)=>{
      done(null, user)
    },done);
})



  
 