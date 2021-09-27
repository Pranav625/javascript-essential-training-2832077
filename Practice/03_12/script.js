/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

function Backpack(
name,
 volume,
 color,
 pocketNum,
 strapLengthL,
 strapLengthR,
 lidOpen
 ){
  this.name=name;
    this.volume=volume;
  this.color= color;
  this.pocketNum= pocketNum;
  this.strapLength = [
left: strapLengthL,
    right: strapLengthR,
    };
this.lidOpen = lidOpen;
this.toggleLid = function(lidStatus){
  this.lidOpen = lidStatus;
};
this.newStrapLength = function (lengthLeft , lengthRight){
  this.strapLength.left = lengthLeft;
  this.strapLength.right = lengthRight;
}
}

export default Backpack;
  
