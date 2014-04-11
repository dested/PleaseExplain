function dbUser(){
    this.name = '';
    this.karma = 0;
}

dbUser.schema=function(){
    return {
        name:String,
            karma:Number
    };
};