HTMLElement.prototype.addClass = function() {
  if(this) {
    //console.log("ADD CLASS");
    var classNameArr = (this.className || "").split(" ");
    //console.log("classNameArr", classNameArr);

    for(var i = 0; i < arguments.length; i++) {
      if(!this.className.match(arguments[i])) {
        classNameArr.push(arguments[i]);
      }
    }

    //console.log("className", this.className);
    this.className = classNameArr.join(" ");
    //console.log("className", this.className);

    classNameArr = null;

    return this;
  }
};

HTMLElement.prototype.removeClass = function() {
  if(this) {
    //console.log("REMOVE CLASS");
    var classNameArr = this.className.split(" ") || [];
    //console.log("classNameArr", classNameArr);

    if( classNameArr.indexOf(arguments[0]) >= 0 ) {
      classNameArr.splice( classNameArr.indexOf(arguments[0]), 1 );
    }

    //console.log("className", this.className);  
    this.className = classNameArr.join(" ");
    //console.log("className", this.className);

    classNameArr = null;

    return this;
  }
};

HTMLElement.prototype.toggleClass = function() {
  if(this) {
    if(this.className.match(arguments[0])) {
      this.removeClass(arguments[0]);
    } else {
      this.addClass(arguments[0]);
    }
    return this;
  }
};

HTMLElement.prototype.hasClass = function(className) {
  if(this) {
    var thisClassName = this.className.split(" ");
    //console.log("HAS CLASS");

    if(typeof className === "object") {
      var classNameArr = className;
    } else {
      var classNameArr = [className];
    }
    var result = false;

    for(var i = 0; i < classNameArr.length; i++) {
      for(var j = 0; j < thisClassName.length; j++) {
        //console.log("classnames", classNameArr[i], thisClassName[j])
        if(classNameArr[i] === thisClassName[j]) {
          result = true;
          i = classNameArr.length;
        }
      }
      if(result) i = thisClassName.length;
    }

    //console.log("result", result);

    return result;
  }
};

HTMLElement.prototype.css = function(property, value) {
  if(this) {
    //console.log("APPLY CSS");

    if(typeof property === "string") {
      this.style[property] = value;
    } else {
      for(var prop in property) {
        console.log(this)
        this.style[prop] = property[prop];
      }
    }

    console.log("style", this.style);

    return this;
  }
};

document.addEventListener("click", function(e) {
	if(e.target.hasClass("gun-info-node")) {
    e.target.toggleClass("open");
  } else
  if(e.target.hasClass("profile")) {
    document.querySelector("#profile-overlay").addClass("open");
    
	} else
	if(e.target.attributes["id"] && e.target.attributes["id"].value === "profile-overlay") {
		e.target.removeClass("open");
	}
});