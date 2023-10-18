class User {
    userid
    username
    discriminator = null
    streak = 0

    constructor(userid?) {
        this.userid = userid ? userid: fetch_userid()
        {this.username, this.discriminator} = fetch_username()
        this.streak = fetch_streak()
    }

    async add_streak() {
        this.streak += fetch_streak()
    }

    async reset_streak() {
        this.streak = 0
    }

    async get_streak() {
        return this.streak
    }
}

export default User;