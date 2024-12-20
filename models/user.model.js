const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ADMIN_USERS = (process.env.ADMIN_USERS || 'admin@example.org')
  .split(',')
  .map(email => email.trim());

const schema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required:"] },
  email: {
    type: String,
    required: [true, "Email is required:"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please fill a valid email address"],
    unique: true,
    lowercase: true,
    trim: true //elimina los espacios
  },
  password: {
    type: String, required: [true, "Password is required:"],
    minLength: [8, "min length: 8"]
  },
  role: {
    type: String,
    enum: ['admin', 'guest'],
    default: 'guest'
  }/*,
  isActive: {
    type : Boolean,
    default: 'false'
  } hacer rutas, controlador etc si el email de verificacion ha sido verificado, se pasaria a true y se iniciera session*/
}, { timestamps: true });

schema.pre("save", function (next) {
  const user = this;

  if(ADMIN_USERS.includes(user.email)) {
    user.role = 'admin';
  }

  if (user.isModified("password")) {
    bcrypt
      .hash(user.password, 10)
      .then((encryptedPassword) => {
        user.password = encryptedPassword;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});

module.exports = mongoose.model('User', schema);