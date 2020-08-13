var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  this.getFirstName = () => fullName.split(' ')[0];
  this.getLastName = () => fullName.split(' ')[1];
  this.getFullName = () => fullName;
  
  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(' ')[1]
  }

  this.setLastName = function(last) {
    fullName = fullName.split(' ')[0] + " " + last;
  }

  this.setFullName = function(name) {
    fullName = name;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
// Returns "Bob Ross"