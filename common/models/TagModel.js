function TagModel() {
    this.text = '';
}

TagModel.populateFromDb = function (tagDbModel) {
    var tagModel=new TagModel();
    tagModel.text = tagDbModel.text;
    return tagModel;
};