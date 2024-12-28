const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("date", (date) => {
  const minDiff = (Date.now() - date.getTime()) / 1000 / 60;

  if (minDiff > 60 * 24) {
    return `${Math.round(minDiff / 60 / 24)}d ago`;
  }

  if (minDiff > 60) {
    return `${Math.round(minDiff / 60)}h ago`;
  }

  return `${Math.round(minDiff)}m ago`;
});


hbs.registerHelper('isOwnedBy', (dog, user, options) => {
  if (dog.user.id == user?.id) {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper('isAdmin', (user, options) => {
  if (user && user.role === 'admin') {
    return options.fn();
  } else {
    return options.inverse();
  }
});

hbs.registerHelper('isSelected', (value, queryValue) => {
  return value === queryValue ? 'checked' : '';
});

