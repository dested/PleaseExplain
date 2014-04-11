function UserModel() {
    this.name = '';
    this.karma = 0;
}

UserModel.populateFromDb = function (userDbModel) {

    var userModel = new UserModel();

    userModel.name = userDbModel.name;
    userModel.karma = userDbModel.karma;
    return userModel;
};