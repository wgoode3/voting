Array.prototype.iSort = function(key){
  for(let i=1; i<this.length; i++){
    for(let j=i; j>0; j--){
      if(this[j][key] > this[j-1][key]){
        let temp = this[j];
        this[j] = this[j-1];
        this[j-1] = temp;
      }else{
        break;
      }
    }
  }
  return this;
}