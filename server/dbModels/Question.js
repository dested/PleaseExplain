function dbQuestion(){
    this.votes = 0;
    this.answers = 0;
    this.views = 0;
    this.text = '';
    this.tags = [];
    this.lastUpdatedTime = 0;
    this.lastPostedUser = null;
}

dbQuestion.schema=function(){
    return {
        votes:Number,
        answers:Array,
        views:Number,
        text:String,
        tags:[dbTag.schema()],
        lastUpdatedTime:{type:Date,default:Date.now},
        lastPostedUser:dbUser.schema()
    };
};