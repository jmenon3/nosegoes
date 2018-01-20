var profile {
    nickName: "", firstName:"", lastName:"", profilePic:""
}

function SwitchPic(pic) {
    profile.profilePic = pic;
}

function EditFirstName(string) {
    profile.firstName = string;
}

function EditLastName(string) {
    profile.lastName = string;
}

function EditNickName(string) {
    profile.nickName = string;
}
